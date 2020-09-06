package com.przedwojski.notes;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

//@RepositoryRestResource(collectionResourceRel = "notes", path = "notes")
public interface NoteRepository extends MongoRepository<Note, String> {
    List<Note> findByAuthor(@Param("author") String author);
}
