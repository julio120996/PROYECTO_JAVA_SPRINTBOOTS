package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;

public interface  UsuarioRepositoy extends JpaRepository<Usuario,Long> {
    
}
