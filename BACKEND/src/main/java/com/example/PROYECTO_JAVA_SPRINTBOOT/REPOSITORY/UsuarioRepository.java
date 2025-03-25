package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByIdAutenticacionExterna(String idAutenticacionExterna);

}
