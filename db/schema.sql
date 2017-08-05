-- Create the database burgers_db and specified it for use.
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar (50) NOT NULL,
devoured boolean NOT NULL,
date DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);