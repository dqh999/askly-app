package com.studyielts.server.repository;

import com.studyielts.server.model.Content;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContentRepository extends JpaRepository<Content,String> {
}
