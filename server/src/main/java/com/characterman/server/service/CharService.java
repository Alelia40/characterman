package com.characterman.server.service;

import com.characterman.server.model.Character;

import java.util.List;
import java.util.Optional;

public interface CharService {
    List<Character> getAllCharacters();
    Optional<Character> getCharacterById(String id);
    Character createCharacter(Character character);
    void deleteCharacter(String id);
}