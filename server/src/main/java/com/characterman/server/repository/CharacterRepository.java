package com.characterman.server.repository;

import com.characterman.server.model.Character;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CharacterRepository extends MongoRepository<Character, String> {
}
