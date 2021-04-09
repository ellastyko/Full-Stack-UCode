CREATE DATABASE IF NOT EXISTS ucode_web;
CREATE USER 'vsergeev'@'localhost' IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT ALL PRIVILEGES ON * . * TO 'vsergeev'@'localhost';
FLUSH PRIVILEGES;