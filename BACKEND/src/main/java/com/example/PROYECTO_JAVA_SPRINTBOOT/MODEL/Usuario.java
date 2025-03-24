package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long id;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "apellido", nullable = false)
    private String apellido;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password")  // Permitir nulo
    private String password;

    @Column(name = "foto_perfil")
    @JsonProperty("foto_perfil") // Permite que JSON use "foto_perfil" en vez de "fotoPerfil"
    private String fotoPerfil;
    @Column(name = "id_autenticacion_externa")
    private String idAutenticacionExterna;
}
