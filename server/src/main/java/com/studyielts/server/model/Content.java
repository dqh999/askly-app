package com.studyielts.server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "contents")
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class Content {
    @Id
    private String id;
    @Column(name = "topic_id")
    private String topicId;
    private String type;
    private String value;
    @Column(name = "language_code")
    private String languageCode;
    @Column(name = "band_score")
    private int bandScore;
}
