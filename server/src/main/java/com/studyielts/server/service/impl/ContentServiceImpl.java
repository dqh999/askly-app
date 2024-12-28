package com.studyielts.server.service.impl;

import com.studyielts.server.model.Content;
import com.studyielts.server.repository.ContentRepository;
import com.studyielts.server.service.IContentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContentServiceImpl implements IContentService {
    private final ContentRepository contentRepository;

    public ContentServiceImpl(ContentRepository contentRepository) {
        this.contentRepository = contentRepository;
    }

    @Override
    public Content create(Content content) {
        return contentRepository.save(content);
    }

    @Override
    public Content update(Content content) {
        return contentRepository.save(content);
    }

    @Override
    public Content getById(String id) {
        return contentRepository.findById(id).orElse(null);
    }

    @Override
    public Page<Content> getAll(Pageable pageable) {
        return contentRepository.findAll(pageable);
    }
}
