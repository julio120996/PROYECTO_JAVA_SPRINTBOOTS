package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;


@Repository
public interface  UsuarioRepositoy extends JpaRepository<Usuario,Long> {
    
    Optional<Usuario> findByEmailAndPassword(String email, String password);
}
