package com.example.PROYECTO_JAVA_SPRINTBOOT.CONTROLLER;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.cloudinaryServices;



@RestController
@RequestMapping("/cloudinary")
public class cloudinaryController {
    @Autowired
    private cloudinaryServices cloudinaryService;

    /*SUBIR IMAGENES SOLAMENTE PARA USUARIOS PERFILES*/
    @PostMapping("/subir")
    public ResponseEntity<Map<String, Object>> subirImagen(@RequestParam("archivo") MultipartFile archivo) {
        Map<String, Object> respuesta = cloudinaryService.subirImagen(archivo);
        return ResponseEntity.ok(respuesta);
    }

    /*ELIMINAR IMAGENES SOLAMENTE PARA USUARIOS PERFILES*/
    @DeleteMapping("/eliminar")
    public ResponseEntity<Map<String, Object>> eliminarImagen(@RequestParam("url") String url) {
        Map<String, Object> respuesta = cloudinaryService.eliminarImagen(url);
        return ResponseEntity.ok(respuesta);
    }
}
