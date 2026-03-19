package com.characterman.server.service;

import com.characterman.server.model.Character;
import com.characterman.server.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MongoCharService implements CharService {

    private final CharacterRepository charRepository;

    @Autowired
    public MongoCharService(CharacterRepository charRepository) {
        this.charRepository = charRepository;
    }

    @Override
    public List<Character> getAllCharacters() {
        return charRepository.findAll();
    }

    @Override
    public Optional<Character> getCharacterById(String id) {
        return charRepository.findById(id);
    }

    @Override
    public Character createCharacter(Character character) {
        return charRepository.save(character);
    }

    @Override
    public void deleteCharacter(String id) {
        charRepository.deleteById(id);
    }
}
