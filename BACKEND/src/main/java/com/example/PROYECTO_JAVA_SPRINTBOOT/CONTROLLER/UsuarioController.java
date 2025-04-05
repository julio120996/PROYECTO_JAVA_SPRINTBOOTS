package com.example.PROYECTO_JAVA_SPRINTBOOT.CONTROLLER;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;
import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.UsuarioServices;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/usuario")
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

        System.out.println(
                "foto_perfil recibido: " + (foto_perfil != null ? foto_perfil.getOriginalFilename() : "Ninguno"));

        Usuario usuario = Usuario.builder()
                .nombre(nombre)
                .apellido(apellido)
                .email(email)
                .password(password)
                .idAutenticacionExterna(idAutenticacionExterna)
                .build();

                                                                        /*SE SUBE PRIMERO A LA NUBE */
        return ResponseEntity.ok(usuarioService.agregarUsuario(usuario, foto_perfil));
    }
    

    @PostMapping("/actualizar") // En vez de @PutMapping
    public ResponseEntity<Map<String, Object>> actualizarUsuario(
            @RequestParam("id") Long idUsuario,
            @RequestParam("nombre") String nombre,
            @RequestParam("apellido") String apellido,
            @RequestParam(value = "foto_perfil", required = false) MultipartFile foto_perfil) {

        return ResponseEntity.ok(usuarioService.actualizarUsuario(idUsuario, nombre, apellido, foto_perfil));
    }

    @PostMapping("/actualizar-password")
    public ResponseEntity<Map<String, Object>> actualizarPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String nuevaPassword = request.get("password");

        return ResponseEntity.ok(usuarioService.actualizarPassword(email, nuevaPassword));
    }

    @PostMapping("/verificar")
    public ResponseEntity<Map<String, Object>> verificarUsuario(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        Map<String, Object> respuesta = usuarioService.verificarUsuario(email);
        return ResponseEntity.ok(respuesta);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUsuario(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");
        String idAutenticacionExterna = request.get("id_autenticacion_externa");

        Map<String, Object> respuesta = usuarioService.loginUsuario(email, password, idAutenticacionExterna);
        return ResponseEntity.ok(respuesta);
    }

    @GetMapping("/listar")
    public ResponseEntity<Map<String, Object>> listarUsuarios() {
        return ResponseEntity.ok(usuarioService.listarUsuarios());
    }

}
