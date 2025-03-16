package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;

import java.sql.Date;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Playlist {
    

    private int id;
    private String Nombre;
    private int id_usuario;
    private Date fecha_creacion;
}
