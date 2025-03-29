package com.example.PROYECTO_JAVA_SPRINTBOOT.CONTROLLER;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PROYECTO_JAVA_SPRINTBOOT.DTO.CancionDTO;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.AlbumProjection;
import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.AlbumService;
import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.CancionService;
import com.example.PROYECTO_JAVA_SPRINTBOOT.UTIL.ResponseHelper;

@RestController
@RequestMapping("/album")
public class AlbumController {
    @Autowired
    private AlbumService albumService;
    @Autowired
    private CancionService cancionService;

    @GetMapping("/listar")
    public Map<String, Object> obtenerAlbumes() {
        List<AlbumProjection> albumes = albumService.obtenerAlbumes();
        return ResponseHelper.enviarRespuesta(true, "Lista de álbumes obtenida correctamente", albumes);
    }

    @GetMapping("/populares")
    public Map<String, Object> obtenerAlbumesPopulares() {
        List<AlbumProjection> albumes = albumService.obtenerAlbumesPopulares();
        return ResponseHelper.enviarRespuesta(true, "Lista de álbumes populares obtenida correctamente", albumes);
    }

    @GetMapping("/tendencia")
    public Map<String, Object> obtenerAlbumesTendencia() {
        List<AlbumProjection> albumes = albumService.obtenerAlbumesTendencia();
        return ResponseHelper.enviarRespuesta(true, "Lista de álbumes en tendencia obtenida correctamente", albumes);
    }

    @GetMapping("/mas-escuchados")
    public Map<String, Object> obtenerAlbumesMasEscuchados() {
        List<AlbumProjection> albumes = albumService.obtenerAlbumesMasEscuchados();
        return ResponseHelper.enviarRespuesta(true, "Lista de álbumes más escuchados obtenida correctamente", albumes);
    }

    @GetMapping("/cantidad-canciones/{id_album}")
    public Map<String, Object> obtenerCantidadCancionesPorAlbum(@PathVariable Long id_album) {
        int total = cancionService.obtenerCantidadCancionesPorAlbum(id_album);
        Map<String, Object> data = new HashMap<>();
        data.put("total_canciones", total);
        return ResponseHelper.enviarRespuesta(true, "Cantidad obtenida", data);
    }

    @GetMapping("/canciones-aleatorias")
    public Map<String, Object> obtenerCancionesAleatorias() {
        List<CancionDTO> canciones = cancionService.obtenerCancionesAleatorias();
        return ResponseHelper.enviarRespuesta(true, "Lista de canciones aleatorias obtenida", canciones);
    }

    @GetMapping("/canciones/{idAlbum}")
    public Map<String, Object> obtenerCancionesPorAlbum(@PathVariable Long idAlbum) {
        return cancionService.obtenerCancionesPorAlbum(idAlbum);
    }
}
