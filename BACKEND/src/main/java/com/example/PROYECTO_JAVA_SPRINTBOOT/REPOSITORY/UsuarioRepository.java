package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    /*Busca un usuario por su correo electrónico. */
    Optional<Usuario> findByEmail(String email);
    /*Busca un usuario por su identificador de autenticación externa */
    Optional<Usuario> findByIdAutenticacionExterna(String idAutenticacionExterna);

}
