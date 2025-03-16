package com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.UsuarioRepositoy;

@Service
public class UsuarioServices {

    @Autowired
    private UsuarioRepositoy usuarioRepositoy;

    public List<Usuario> getAllUsuario(){
        return usuarioRepositoy.findAll();
    }
    public Usuario creUsuario(Usuario usuario){
        return usuarioRepositoy.save(usuario);
    }

    public Usuario updateUsuario(Usuario usuario){
        return usuarioRepositoy.save(usuario);
    }

    public void deleteUsuarioById(Long id){
        usuarioRepositoy.deleteById(id);
    }


}
