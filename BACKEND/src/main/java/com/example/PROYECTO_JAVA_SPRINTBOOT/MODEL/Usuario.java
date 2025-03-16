package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    private int id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private String foto_perfil;
    private Date fecha_registro;
    private String tipo_autenticacion;
    private String id_autenticacion_externa;
}
