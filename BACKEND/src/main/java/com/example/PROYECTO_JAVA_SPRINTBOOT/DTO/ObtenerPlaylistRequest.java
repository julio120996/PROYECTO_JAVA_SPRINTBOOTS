package com.example.PROYECTO_JAVA_SPRINTBOOT.DTO;

import lombok.Data;

@Data
public class ObtenerPlaylistRequest {
    private Long id_usuario;
    private Long id_playlist;
}