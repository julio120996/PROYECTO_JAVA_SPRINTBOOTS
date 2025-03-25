package com.example.PROYECTO_JAVA_SPRINTBOOT.CONFIG;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                                .cors(cors -> cors.disable()) // Asegura que CORS se gestione externamente
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests(auth -> auth
                                                .requestMatchers(
                                                                "/usuario/agregar",
                                                                "/usuario/google",
                                                                "/usuario/actualizar",
                                                                "/usuario/actualizar-password",
                                                                "/usuario/verificar",
                                                                "/usuario/login",
                                                                "/correo/enviar-codigo")
                                                .permitAll()
                                                .anyRequest().authenticated())
                                .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.disable()))
                                .formLogin(form -> form.disable())
                                .httpBasic(basic -> basic.disable());

                return http.build();
        }
}
