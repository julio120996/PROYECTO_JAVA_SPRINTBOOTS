package com.example.PROYECTO_JAVA_SPRINTBOOT.DTO;

import lombok.Data;

@Data
public class ActualizarPlaylistRequest {
    private Long id_playlist;
    private Long id_usuario;
    private String nombre;
}