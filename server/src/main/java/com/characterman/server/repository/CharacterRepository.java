package com.characterman.server.repository;

import com.characterman.server.model.Character;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CharacterRepository extends MongoRepository<Character, String> {
    List<Character> findByUserId(String userId);
}
