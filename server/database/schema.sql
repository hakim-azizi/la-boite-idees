CREATE TABLE idea (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(256) NOT NULL,
    good TINYINT DEFAULT 0 NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE bad_idea (
    id INT NOT NULL AUTO_INCREMENT,
    id_idea INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (id_idea) REFERENCES idea (id) ON DELETE CASCADE
);

CREATE TABLE good_idea (
    id INT NOT NULL AUTO_INCREMENT,
    id_idea INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (id_idea) REFERENCES idea (id) ON DELETE CASCADE
);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    hashed_password VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT UX_email UNIQUE (email)
);

INSERT INTO
    user (
        email,
        hashed_password
    )
VALUES (


'hakazizi@hotmail.com',
'$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q'

) 