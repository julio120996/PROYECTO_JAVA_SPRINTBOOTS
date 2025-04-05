package com.example.PROYECTO_JAVA_SPRINTBOOT.CONFIG;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
        /* PERMITE HABILITAR LAS RUTAS DE EJECUCION */
        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                                .cors(cors -> cors.disable()) // Desactivar CORS si no es necesario
                                .csrf(csrf -> csrf.disable()) // Desactivar CSRF
                                .authorizeHttpRequests(auth -> auth
                                                .requestMatchers(
                                                                "/album/**", // 🔥 Permitir todas las rutas dentro de
                                                                             // /album/
                                                                "/usuario/agregar",
                                                                "/usuario/google",
                                                                "/usuario/actualizar",
                                                                "/usuario/actualizar-password",
                                                                "/usuario/verificar",
                                                                "/usuario/login",
                                                                "/correo/enviar-codigo",
                                                                "/playlist/eliminar-cancion",
                                                                "/playlist/**")
                                                .permitAll() // Asegura que todas las rutas de playlist sean accesibles
                                                             // sin autenticación
                                                .anyRequest().authenticated() // Requiere autenticación para otras rutas
                                )
                                .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.disable()))
                                .formLogin(form -> form.disable())
                                .httpBasic(basic -> basic.disable());
                return http.build();
        }

}
