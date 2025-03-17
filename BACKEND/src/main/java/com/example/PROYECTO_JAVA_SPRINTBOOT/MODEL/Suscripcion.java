package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.BitSet;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Suscripcion {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     @Column
    private int id;
    @Column
    private int id_usuario;
    @Column
    private BitSet plan;
    @Column
    private Date fecha_inicio;
    @Column
    private Date fecha_fin;
}
