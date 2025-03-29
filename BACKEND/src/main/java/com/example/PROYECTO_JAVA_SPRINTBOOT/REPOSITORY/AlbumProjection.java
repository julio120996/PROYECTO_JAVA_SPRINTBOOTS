package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;

import com.fasterxml.jackson.annotation.JsonProperty;

/*OBTENER NOMBRES ESPECIFICOS EN LA DATA */

public interface AlbumProjection {
    @JsonProperty("id_album")
    Integer getIdAlbum();

    @JsonProperty("titulo")
    String getTitulo();

    @JsonProperty("id_artista")
    Integer getIdArtista();

    @JsonProperty("nombre_artista")
    String getNombreArtista();

    @JsonProperty("imagen")
    String getImagen();
}