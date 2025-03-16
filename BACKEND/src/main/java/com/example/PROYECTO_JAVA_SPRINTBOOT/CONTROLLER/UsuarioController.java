package com.example.PROYECTO_JAVA_SPRINTBOOT.CONTROLLER;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;
import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.UsuarioServices;

@RestController
@RequestMapping("usuario/")
public class UsuarioController {

    private UsuarioServices services;

    @GetMapping("/listar")
    public List<Usuario> listarTodo(){
        return services.getAllUsuario();
    }
    
    @PostMapping("/registrar")
    public Usuario crear(@RequestBody Usuario usuario){
        return services.creUsuario(usuario);
    }

    @PutMapping("/editar/{id}")
    public Usuario actualizar(@RequestBody Usuario usuario,@PathVariable Long id){
        
        usuario.setId(id);
        return services.updateUsuario(usuario);
    }

    @DeleteMapping("/eliminar/{id}")
        public String eliminar(@PathVariable Long id){
            services.deleteUsuarioById(id);
        return "se elimino el registro: " + id;

        }
}
