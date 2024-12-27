create table accounts
(
    id                  varchar(36) primary key,
    oauth_provider      varchar(255) not null,
    oauth_id            varchar(255) not null,
    email               varchar(255) unique,
    full_name           varchar(255),
    profile_picture_url varchar(255),
    created_at          timestamp,
    updated_at          timestamp
);
create table topics
(
    id          varchar(36) primary key,
    name        varchar(255) not null,
    description text,
    created_at  timestamp,
    updated_at  timestamp
);
CREATE TABLE study_topics (
    id varchar(36) primary key,
    topic_id varchar(36),
    account_id varchar(36),
    created_at  timestamp,
    updated_at  timestamp
);
create table vocabularies
(
    id               varchar(36) primary key,
    account_id       varchar(36)  not null,
    topic_id         varchar(36)  not null,
    word             varchar(255) not null,
    language_code    varchar(10)  not null,
    meaning          text,
    definition_language_code varchar(10),
    example_sentence text,
    created_at       timestamp,
    updated_at       timestamp
);
create table sentences
(
    id         varchar(36) primary key,
    topic_id   varchar(36) not null,
    sentence   text        not null,
    language_code   varchar(10) not null,
    created_at timestamp,
    updated_at timestamp
);