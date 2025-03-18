package com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.UsuarioRepositoy;

@Service
public class UsuarioServices {

    @Autowired
    private UsuarioRepositoy repositoy;

    public List<Usuario> getAllUsuarios() {
        return repositoy.findAll();
    }
}
