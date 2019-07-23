CREATE DATABASE ng_user_db;

USE ng_user_db;

CREATE TABLE user(
    id INT(11) NOT NULL PRIMARY KEY,
    nombre VARCHAR(180),
    apellido VARCHAR(180),
    fecha DATE
);
DESCRIBE user;