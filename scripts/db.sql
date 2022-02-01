CREATE DATABASE IF NOT EXISTS friendfit;

USE friendfit;

CREATE TABLE IF NOT EXISTS exercises(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
);

INSERT INTO exercises (title, description) VALUES
    ('Pectorales', 'Ejercicio para el pecho'),
    ('Abdominales', 'Ejercicio para el abdomen');

