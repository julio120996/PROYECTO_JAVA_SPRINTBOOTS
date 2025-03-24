package com.example.PROYECTO_JAVA_SPRINTBOOT.CONTROLLER;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;
import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.UsuarioServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/usuarios")
@RequiredArgsConstructor
public class UsuarioController {
    private final UsuarioServices usuarioService;

    @PostMapping("/agregar")
public ResponseEntity<Map<String, Object>> agregarUsuario(
        @RequestParam("nombre") String nombre,
        @RequestParam("apellido") String apellido,
        @RequestParam("email") String email,
        @RequestParam(value = "password", required = false) String password,
        @RequestParam(value = "id_autenticacion_externa", required = false) String idAutenticacionExterna,
        @RequestParam(value = "foto_perfil", required = false) MultipartFile foto_perfil) {

    System.out.println("foto_perfil recibido: " + (foto_perfil != null ? foto_perfil.getOriginalFilename() : "Ninguno"));

    Usuario usuario = Usuario.builder()
            .nombre(nombre)
            .apellido(apellido)
            .email(email)
            .password(password)
            .idAutenticacionExterna(idAutenticacionExterna)
            .build();

    return ResponseEntity.ok(usuarioService.agregarUsuario(usuario, foto_perfil));
}


    
    


    @GetMapping("/listar")
    public ResponseEntity<Map<String, Object>> listarUsuarios() {
        return ResponseEntity.ok(usuarioService.listarUsuarios());
    }

    @GetMapping("/verificar/{id}")
    public ResponseEntity<Map<String, Object>> verificarUsuario(@PathVariable Long id) {
        return ResponseEntity.ok(usuarioService.verificarUsuario(id));
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Map<String, Object>> actualizarUsuario(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.actualizarUsuario(usuario));
    }

    @PostMapping("/actualizar-foto/{id}")
    public ResponseEntity<Map<String, Object>> actualizarFotoPerfil(@PathVariable Long id, @RequestParam("archivo") MultipartFile archivo) {
        return ResponseEntity.ok(usuarioService.actualizarFotoPerfil(id, archivo));
    }
}
