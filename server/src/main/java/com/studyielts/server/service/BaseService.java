package com.studyielts.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BaseService<T,K> {
    T create(T t);
    T update(T t);
    T getById(K id);
    Page<T> getAll(Pageable pageable);
}
