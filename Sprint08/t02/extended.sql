USE ucode_web;

CREATE TABLE IF NOT EXISTS powers(

    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    hero_id INT NOT NULL,    
    name CHAR(30) NOT NULL, 
    points INT,
    type ENUM('attack', 'defense') NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS races(

    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    hero_id INT NOT NULL,    
    name CHAR(30) NOT NULL, 
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);

CREATE TABLE IF NOT EXISTS teams(

    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    hero_id INT NOT NULL,    
    name CHAR(30) NOT NULL, 
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);

INSERT IGNORE INTO powers(hero_id, name, points, type) VALUES
    (1, 'bloody fist', 110, 'attack'),
    (1, 'shield', 234, 'defence'),
    (2, 'iron shield', 200, 'defense'),
    (2, 'powerful guns', 230, 'attack'),
    (3, 'smartness', 180, 'attack'),
    (4, 'strength', 300, 'attack'),
    (5, 'infinity stones', 230, 'attack'),
    (6, 'cleverness', 100, 'defense'),
    (7, 'cleverness', 100, 'defense'),
    (8, 'steel arm', 150, 'attack');
INSERT IGNORE INTO races(hero_id, name) VALUES
    (1, 'Human'),
    (3, "Widow"),
    (4, "Green human"),
    (5, "Titan"),
    (6, "Widow"),
    (7, "Greeness"),
    (8, "Half god"),
    (9, "Human");
INSERT IGNORE INTO teams(hero_id, name) VALUES
    (1, 'Avengers'),
    (1, 'U.S. forces'),
    (2, 'Avengers'),
    (3, 'Avengers'),
    (4, 'Avengers'),
    (6, 'Hydra'),
    (7, 'Avengers'),
    (7, 'Thanos alians'),
    (8, 'Avengers'),
    (8, 'Destroyers'),
    (9, 'Avengers');

SELECT * FROM powers;
SELECT * FROM races;
SELECT * FROM teams;