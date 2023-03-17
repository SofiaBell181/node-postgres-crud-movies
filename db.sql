CREATE TABLE movie
(
    id integer PRIMARY KEY,
    movie VARCHAR(36) NOT NULL,
    year integer NOT NULL,
);


CREATE TABLE genre
(
    id integer PRIMARY KEY,
    genre VARCHAR(36) NOT NULL,
    movie_genre_fkey integer REFERENCES movie(id) 
)