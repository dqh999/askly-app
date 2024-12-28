package com.studyielts.server.controller;

import com.studyielts.server.service.IContentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/content")
public class ContentController {
    private final IContentService contentService;
    public ContentController(IContentService contentService) {
        this.contentService = contentService;
    }
}
