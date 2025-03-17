package com.example.PROYECTO_JAVA_SPRINTBOOT;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.PROYECTO_JAVA_SPRINTBOOT")
@EnableJpaRepositories("com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY")
public class ProyectoJavaSprintbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoJavaSprintbootApplication.class, args);
	}

}
