USE ucode_web;

CREATE TABLE IF NOT EXISTS heroes(

    id          INTEGER AUTO_INCREMENT PRIMARY KEY  NOT NULL, 
    name        CHAR(30) UNIQUE                     NOT NULL, 
    description VARCHAR(1000)                      NOT NULL, 
    race        VARCHAR(1000) DEFAULT 'human'       NOT NULL, 
    class_role  ENUM('tankman', 'healer', 'dps')    NOT NULL
);
