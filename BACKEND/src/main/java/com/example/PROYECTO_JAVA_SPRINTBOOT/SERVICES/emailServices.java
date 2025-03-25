package com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.PROYECTO_JAVA_SPRINTBOOT.UTIL.ResponseHelper;

@Service
public class emailServices {
    @Autowired
    private JavaMailSender mailSender;

    public Map<String, Object> enviarCodigo(String email) {
        if (email == null || email.isEmpty()) {
            return ResponseHelper.enviarRespuesta(false, "El correo no puede estar vacío.");
        }

        // Generar código aleatorio de 6 dígitos
        int codigo = new Random().nextInt(900000) + 100000;

        try {
            SimpleMailMessage mensaje = new SimpleMailMessage();
            mensaje.setFrom("citamatchpasionlove@gmail.com");
            mensaje.setTo(email);
            mensaje.setSubject("Código de Verificación");
            mensaje.setText("Tu código de verificación es: " + codigo);

            mailSender.send(mensaje);

            // Crear el objeto "data" con el código dentro
            Map<String, Object> data = new HashMap<>();
            data.put("codigo", codigo);

            // Retornar el código dentro del objeto "data"
            return ResponseHelper.enviarRespuesta(true, "Código enviado correctamente", data);
        } catch (Exception e) {
            return ResponseHelper.enviarRespuesta(false, "Error al enviar el correo: " + e.getMessage());
        }
    }
}
