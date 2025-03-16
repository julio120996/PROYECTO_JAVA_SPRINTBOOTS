package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.BitSet;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class Suscripcion {
    
    private int id;
    private int id_usuario;
    private BitSet plan;
    private Date fecha_inicio;
    private Date fecha_fin;
}
