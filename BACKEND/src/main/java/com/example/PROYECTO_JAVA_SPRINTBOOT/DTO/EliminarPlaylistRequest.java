package com.example.PROYECTO_JAVA_SPRINTBOOT.DTO;

import lombok.Data;

@Data
public class EliminarPlaylistRequest {
    private Long id_playlist;
    private Long id_usuario;
}
