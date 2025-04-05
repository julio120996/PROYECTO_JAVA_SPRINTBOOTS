package com.example.PROYECTO_JAVA_SPRINTBOOT.CONFIG;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/*SIRVE PARA EJECUTAR EL SERVICIO EN API REST EN EL FRONT END QUE TRABAJA CON REACT */
/*PARA DAR PERMISO PARA TRABAJAR CON LOS METODOS*/
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Permitir todas las rutas
                        .allowedOrigins("http://localhost:5173") // Permitir solo el frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos permitidos
                        .allowedHeaders("*") // Permitir todos los headers
                        .allowCredentials(true); // Permitir credenciales (cookies, auth headers)
            }
        };
    }
}
