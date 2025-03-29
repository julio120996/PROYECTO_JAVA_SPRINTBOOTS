package com.example.PROYECTO_JAVA_SPRINTBOOT.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

/*ESTA CLASE SOLAMENTE ES PARA OBTENER DATOS DE LA CLASE CANCION UTLIZANDO CON NOMBRES ESPECIFICOS EN ALGUNAS CONSULTAS*/
public class CancionDTO {
    private Long id;
    private String titulo;
    private String audio;
    private String imagen; // Eliminamos subtítulo
}
