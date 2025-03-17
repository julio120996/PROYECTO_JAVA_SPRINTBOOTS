package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
  
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class   Canciones {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String titulo;
    @Column
    private long id_album;
    @Column
    private long id_artista;
    @Column
    private String audio;
    @Column
    private String pista_subtitulo;
    @Column
    private String imagen;

}
