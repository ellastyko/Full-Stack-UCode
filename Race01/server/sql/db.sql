CREATE DATABASE IF NOT EXISTS card_game;
USE card_game;

CREATE TABLE IF NOT EXISTS users (

    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    photo VARCHAR(300) DEFAULT 'https://www.joispot.com/assets/img/user.jpg',
    cards VARCHAR(500) DEFAULT 'none',
    search BOOLEAN DEFAULT 0
);

-- CREATE TABLE IF NOT EXISTS game (

--     id INT AUTO_INCREMENT PRIMARY KEY,
--     player1 VARCHAR(30) UNIQUE NOT NULL,
--     player2 VARCHAR(30) UNIQUE NOT NULL,
--     stat VARCHAR(1000) NOT NULL   
-- );
