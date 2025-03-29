package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "albumes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_album")
    private Integer id;

    @Column(name = "titulo", nullable = false, length = 80)
    private String titulo;

    @Column(name = "id_artista", nullable = false)
    private Integer idArtista;

    @Column(name = "fecha_lanzamiento")
    private java.sql.Date fechaLanzamiento;

    @Column(name = "imagen", nullable = false, length = 255)
    private String imagen;
}
