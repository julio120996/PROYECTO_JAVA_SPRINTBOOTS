package com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class emailServices {
    @Autowired
    private JavaMailSender mailSender;

    public String enviarCodigo(String email) {
        if (email == null || email.isEmpty()) {
            return "El correo no puede estar vacío.";
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
            return "Código enviado correctamente: " + codigo;
        } catch (Exception e) {
            return "Error al enviar el correo: " + e.getMessage();
        }
    }
}
