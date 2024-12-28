create table contents
(
    id            varchar(36) primary key,
    topic      json,
    type          varchar(10) not null, -- s or p
    value         text        not null,
    language_code varchar(10) not null,
    band_score    int         not null,
    created_at    timestamp,
    updated_at    timestamp
);
