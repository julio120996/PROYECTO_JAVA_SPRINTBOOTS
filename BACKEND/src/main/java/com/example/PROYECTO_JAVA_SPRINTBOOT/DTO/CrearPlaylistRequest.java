package com.example.PROYECTO_JAVA_SPRINTBOOT.DTO;

import lombok.Data;

@Data
public class CrearPlaylistRequest {
    private String nombre;
    private Long id_usuario;
}