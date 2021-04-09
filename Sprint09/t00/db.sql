USE ucode_web;

CREATE TABLE IF NOT EXISTS users(
    id INT      UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    login       VARCHAR(30) UNIQUE                     NOT NULL, 
    password    VARCHAR(40)                      NOT NULL, 
    fullname    VARCHAR(50)                        NOT NULL, 
    email       VARCHAR(50) UNIQUE                  NOT NULL,
    admin       BOOLEAN  DEFAULT 0 
);


-- INSERT INTO users(login, password, fullname, email, admin) VALUES('ella', '555', 'Vadim', 'ellastyko@gmail.com', TRUE);
-- INSERT INTO users(login, password, fullname, email) VALUES('johny', '555', 'John', 'ellao@gmail.com');