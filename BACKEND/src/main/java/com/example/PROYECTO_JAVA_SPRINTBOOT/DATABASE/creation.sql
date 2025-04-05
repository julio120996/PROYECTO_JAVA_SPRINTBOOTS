DROP DATABASE IF EXISTS NekoSound;
CREATE DATABASE IF NOT EXISTS NekoSound;
USE NekoSound;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(255) ,
    foto_perfil VARCHAR(255),
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_autenticacion_externa VARCHAR(255)
);


CREATE TABLE playlists (
    id_playlist INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    id_usuario INT NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

CREATE TABLE generos (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE artistas (
    id_artista INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    id_genero INT NOT NULL,
    pais VARCHAR(50),
    FOREIGN KEY (id_genero) REFERENCES generos(id_genero) ON DELETE CASCADE
);

CREATE TABLE albumes (
    id_album INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL,
    id_artista INT NOT NULL,
    fecha_lanzamiento DATE,
    imagen VARCHAR(255) NOT NULL, 
    FOREIGN KEY (id_artista) REFERENCES artistas(id_artista) ON DELETE CASCADE
);

CREATE TABLE canciones (
    id_cancion INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(60) NOT NULL,
    id_album INT NOT NULL,
    id_artista INT NOT NULL,
    audio VARCHAR(255) NOT NULL,
    pista_subtitulo VARCHAR(255),
    imagen VARCHAR(255), 
    FOREIGN KEY (id_album) REFERENCES albumes(id_album) ON DELETE CASCADE,
    FOREIGN KEY (id_artista) REFERENCES artistas(id_artista) ON DELETE CASCADE
);

CREATE TABLE playlist_canciones (
    id_playlist_cancion INT AUTO_INCREMENT PRIMARY KEY,
    id_playlist INT NOT NULL,
    id_cancion INT NOT NULL,
    FOREIGN KEY (id_playlist) REFERENCES playlists(id_playlist) ON DELETE CASCADE,
    FOREIGN KEY (id_cancion) REFERENCES canciones(id_cancion) ON DELETE CASCADE
);

CREATE TABLE historial (
    id_historial INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_cancion INT NOT NULL,
    fecha_reproduccion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_cancion) REFERENCES canciones(id_cancion) ON DELETE CASCADE
);



