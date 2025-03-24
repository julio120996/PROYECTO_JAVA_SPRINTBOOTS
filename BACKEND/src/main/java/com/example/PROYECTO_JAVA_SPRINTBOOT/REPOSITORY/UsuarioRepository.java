package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;



@Repository
public interface  UsuarioRepository extends JpaRepository<Usuario,Long> {
     

}
