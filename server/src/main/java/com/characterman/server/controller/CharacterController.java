package com.characterman.server.controller;

import com.characterman.server.model.Character;
import com.characterman.server.service.CharService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {

    private final CharService charService;

    @Autowired
    public CharacterController(CharService charService) {
        this.charService = charService;
    }

    @GetMapping
    public ResponseEntity<List<Character>> getAllCharacters() {
        return new ResponseEntity<>(charService.getAllCharacters(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Character> getCharacterById(@PathVariable String id) {
        return charService.getCharacterById(id)
                .map(character -> new ResponseEntity<>(character, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Character> createCharacter(@RequestBody Character character) {
        Character createdCharacter = charService.createCharacter(character);
        return new ResponseEntity<>(createdCharacter, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCharacter(@PathVariable String id) {
        charService.deleteCharacter(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
