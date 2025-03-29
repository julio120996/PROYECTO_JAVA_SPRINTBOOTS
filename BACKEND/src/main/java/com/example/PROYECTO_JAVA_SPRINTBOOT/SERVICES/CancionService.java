package com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.PROYECTO_JAVA_SPRINTBOOT.DTO.CancionDTO;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.CancionRepository;

@Service
public class CancionService {
    @Autowired
    private CancionRepository cancionRepository;

    public int obtenerCantidadCancionesPorAlbum(Long idAlbum) {
        return cancionRepository.countByAlbumId(idAlbum);
    }

    public List<CancionDTO> obtenerCancionesAleatorias() {
        List<Object[]> resultados = cancionRepository.findRandomSongsWithAlbumImage();

        System.out.println("🔥 Canciones obtenidas: " + resultados);

        return resultados.stream()
                .map(obj -> new CancionDTO(
                        ((Number) obj[0]).longValue(), // ID
                        (String) obj[1], // Título
                        (String) obj[2], // Audio
                        (obj[3] != null) ? (String) obj[3] : "" // Imagen
                ))
                .collect(Collectors.toList());
    }

    public Map<String, Object> obtenerCancionesPorAlbum(Long idAlbum) {
        List<Object[]> resultados = cancionRepository.findSongsByAlbum(idAlbum);

        if (resultados.isEmpty()) {
            throw new RuntimeException("No se encontraron canciones para este álbum");
        }

        // Extraer datos del álbum y artista desde el primer resultado
        Object[] albumInfo = resultados.get(0);
        Map<String, Object> albumData = new HashMap<>();
        albumData.put("id", albumInfo[0]);
        albumData.put("titulo", albumInfo[1]);
        albumData.put("fecha_lanzamiento", albumInfo[2]);
        albumData.put("imagen", albumInfo[3]);

        Map<String, Object> artistaData = new HashMap<>();
        artistaData.put("id", albumInfo[4]);
        artistaData.put("nombre", albumInfo[5]);
        artistaData.put("pais", albumInfo[6]);

        albumData.put("artista", artistaData);

        // Lista de canciones
        List<Map<String, Object>> canciones = resultados.stream().map(row -> {
            Map<String, Object> cancion = new HashMap<>();
            cancion.put("id", row[7]);
            cancion.put("titulo", row[8]);
            cancion.put("audio", row[9]);
            cancion.put("subtitulo", row[10] != null ? row[10] : "");
            cancion.put("imagen", row[11] != null ? row[11] : "");
            return cancion;
        }).collect(Collectors.toList());

        // Formar la respuesta
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Canciones del álbum obtenidas correctamente");
        response.put("data", Map.of("album", albumData, "canciones", canciones));

        return response;
    }

}