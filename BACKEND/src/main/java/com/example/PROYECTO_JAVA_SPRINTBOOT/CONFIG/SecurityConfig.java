package com.example.PROYECTO_JAVA_SPRINTBOOT.CONFIG;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // Forma recomendada para deshabilitar CSRF
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/usuarios/agregar", "/usuarios/google").permitAll()  // Permitir acceso sin autenticación
                .anyRequest().authenticated()  // Requerir autenticación para otros endpoints
            );

        return http.build();
    }
}
