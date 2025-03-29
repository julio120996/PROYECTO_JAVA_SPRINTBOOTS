package com.example.PROYECTO_JAVA_SPRINTBOOT.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CancionDTO {
    private Long id;
    private String titulo;
    private String audio;
    private String imagen; // Eliminamos subtítulo
}
