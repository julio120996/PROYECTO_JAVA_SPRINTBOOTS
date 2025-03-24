package com.example.PROYECTO_JAVA_SPRINTBOOT.CONTROLLER;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.emailServices;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/correo")
public class emailController {
    @Autowired
    private emailServices emailService;

    // Nueva versión para recibir JSON
    @PostMapping("/enviar-codigo")
    public ResponseEntity<Map<String, Object>> enviarCodigo(@RequestBody Map<String, String> request) {
        String email = request.get("email");

        String mensaje = emailService.enviarCodigo(email);
        Map<String, Object> respuesta = new HashMap<>();

        if (mensaje.contains("Código enviado correctamente")) {
            respuesta.put("success", true);
            respuesta.put("message", mensaje);
        } else {
            respuesta.put("success", false);
            respuesta.put("message", mensaje);
        }

        return ResponseEntity.ok(respuesta);
    }
}
