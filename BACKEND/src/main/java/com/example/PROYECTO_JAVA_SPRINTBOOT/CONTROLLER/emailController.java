package com.example.PROYECTO_JAVA_SPRINTBOOT.CONTROLLER;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.emailServices;

@RestController
@RequestMapping("/correo")
public class emailController {
    @Autowired
    private emailServices emailService;

    /*ENVIA CODIGO A TRAVES DE GOOGLE*/
    @PostMapping("/enviar-codigo")
    public ResponseEntity<Map<String, Object>> enviarCodigo(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        return ResponseEntity.ok(emailService.enviarCodigo(email));
    }
}
