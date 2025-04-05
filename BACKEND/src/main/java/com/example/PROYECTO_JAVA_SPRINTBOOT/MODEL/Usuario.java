package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    @JsonProperty("id_usuario")
    private Long id;

    @Column(name = "nombre", nullable = false)
    @JsonProperty("nombre")
    private String nombre;

    @Column(name = "apellido", nullable = false)
    @JsonProperty("apellido")
    private String apellido;

    @Column(name = "email", nullable = false, unique = true)
    @JsonProperty("email")
    private String email;

    @Column(name = "password") // Permitir nulo
    @JsonProperty("password") // Mantiene el nombre exacto
    private String password;

    @Column(name = "foto_perfil")
    @JsonProperty("foto_perfil") // Permite que JSON use "foto_perfil" en vez de "fotoPerfil"
    private String fotoPerfil;
    @Column(name = "id_autenticacion_externa")
    @JsonProperty("id_autenticacion_externa") // Esto hace que en JSON aparezca con _
    private String idAutenticacionExterna;

    @Column(name = "fecha_registro", updatable = false)
    @JsonProperty("fecha_registro")
    @Builder.Default
    private LocalDateTime fechaRegistro = LocalDateTime.now();
}
