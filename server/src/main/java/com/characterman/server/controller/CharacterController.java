package com.characterman.server.controller;

import com.characterman.server.model.Character;
import com.characterman.server.model.User;
import com.characterman.server.repository.UserRepository;
import com.characterman.server.service.CharService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {

    private final CharService charService;
    private final UserRepository userRepository;

    @Autowired
    public CharacterController(CharService charService, UserRepository userRepository) {
        this.charService = charService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<Character>> getAllCharacters(Principal principal) {
        User user = userRepository.findByUsername(principal.getName());
        return new ResponseEntity<>(charService.getCharactersByUserId(user.getId()), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Character> getCharacterById(@PathVariable String id) {
        return charService.getCharacterById(id)
                .map(character -> new ResponseEntity<>(character, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Character> createCharacter(@RequestBody Character character, Principal principal) {
        User user = userRepository.findByUsername(principal.getName());
        character.setUserId(user.getId());
        Character createdCharacter = charService.createCharacter(character);
        return new ResponseEntity<>(createdCharacter, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCharacter(@PathVariable String id) {
        charService.deleteCharacter(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
