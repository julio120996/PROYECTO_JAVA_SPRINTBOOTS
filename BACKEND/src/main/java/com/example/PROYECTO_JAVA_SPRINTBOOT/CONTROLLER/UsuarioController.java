package com.example.PROYECTO_JAVA_SPRINTBOOT.CONTROLLER;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;
import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.UsuarioServices;

@RestController
@RequestMapping("usuario/")
public class UsuarioController {

    @Autowired
    private UsuarioServices servicio;

    @GetMapping("/listar") // Declaramos el método GET para la ruta que nos traerá la lista de empleados
    public List<Usuario> ListUsuario() {
        return servicio.getAllUsuarios();
    }
}
