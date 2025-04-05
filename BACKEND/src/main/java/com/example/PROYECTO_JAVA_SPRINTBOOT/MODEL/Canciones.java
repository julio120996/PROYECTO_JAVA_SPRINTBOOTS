package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "canciones") // Asegúrate de que coincide con la tabla en MySQL
public class Canciones {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cancion") // Asegura que coincida con la tabla MySQL
    private Long id;

    private String titulo;

    @ManyToOne
    @JoinColumn(name = "id_album", nullable = false)
    private Album album; // Debes crear una clase Album.java

    @ManyToOne
    @JoinColumn(name = "id_artista", nullable = false)
    private Artistas artista; // Debes crear una clase Artista.java

    private String audio;

    @Column(name = "pista_subtitulo")
    private String subtitulo;

    private String imagen;
}