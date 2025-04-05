package com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES;

import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Canciones;
import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Playlist;
import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.PlaylistCancion;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.CancionRepository;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.PlaylistCancionRepository;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.PlaylistRepository;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.UsuarioRepository;
import com.example.PROYECTO_JAVA_SPRINTBOOT.UTIL.ResponseHelper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlaylistService {

    private final PlaylistRepository playlistRepository;
    private final UsuarioRepository usuarioRepository;
    private final CancionRepository cancionRepository;
    private final PlaylistCancionRepository playlistCancionRepository;

    @Transactional(readOnly = true)
    public Map<String, Object> listarPlaylistsPorUsuario(Long usuarioId) {
        List<Playlist> playlists = playlistRepository.findByUsuarioId(usuarioId);

        List<Map<String, Object>> playlistsData = playlists.stream()
                .map(p -> {
                    Map<String, Object> playlistMap = new HashMap<>();
                    playlistMap.put("id_playlist", p.getId());
                    playlistMap.put("nombre", p.getNombre());
                    playlistMap.put("id_usuario", p.getUsuario().getId());
                    playlistMap.put("fecha_creacion", p.getFechaCreacion()
                            .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
                    return playlistMap;
                })
                .collect(Collectors.toList());
        return ResponseHelper.enviarRespuesta(true, "Playlists obtenidas", playlistsData);
    }

    @Transactional
    public Map<String, Object> crearPlaylist(String nombre, Long usuarioId) {
        return usuarioRepository.findById(usuarioId)
                .map(usuario -> {
                    Playlist playlist = playlistRepository.save(
                            Playlist.builder()
                                    .nombre(nombre)
                                    .usuario(usuario)
                                    .build());
                    return ResponseHelper.enviarRespuesta(
                            true,
                            "Playlist creada",
                            Map.of("id_playlist", playlist.getId()));
                })
                .orElse(ResponseHelper.enviarRespuesta(false, "Usuario no encontrado"));
    }

    @Transactional
    public Map<String, Object> actualizarPlaylist(Long playlistId, Long usuarioId, String nuevoNombre) {
        return playlistRepository.findByIdAndUsuarioId(playlistId, usuarioId)
                .map(playlist -> {
                    playlist.setNombre(nuevoNombre);
                    playlistRepository.save(playlist);
                    return ResponseHelper.enviarRespuesta(true, "Nombre de playlist actualizado",
                            Collections.emptyList());
                })
                .orElse(ResponseHelper.enviarRespuesta(false, "Playlist no encontrada o no pertenece al usuario"));
    }

    @Transactional
    public Map<String, Object> eliminarPlaylist(Long playlistId, Long usuarioId) {
        return playlistRepository.findByIdAndUsuarioId(playlistId, usuarioId)
                .map(playlist -> {
                    playlistRepository.delete(playlist);
                    return ResponseHelper.enviarRespuesta(true, "Playlist eliminada", Collections.emptyList());
                })
                .orElse(ResponseHelper.enviarRespuesta(false, "Playlist no encontrada o no pertenece al usuario"));
    }

    @Transactional(readOnly = true)
    public Map<String, Object> obtenerPlaylistDetallada(Long usuarioId, Long playlistId) {
        return playlistRepository.findByIdAndUsuarioId(playlistId, usuarioId)
                .map(playlist -> {
                    Map<String, Object> playlistData = new LinkedHashMap<>();
                    playlistData.put("id_playlist", playlist.getId());
                    playlistData.put("nombre", playlist.getNombre());
                    playlistData.put("fecha_creacion", playlist.getFechaCreacion()
                            .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));

                    playlistData.put("usuario", Map.of("nombre", playlist.getUsuario().getNombre()));

                    List<Map<String, Object>> cancionesData = playlist.getCanciones().stream()
                            .map(pc -> {
                                Canciones cancion = pc.getCancion();
                                return Map.of(
                                        "id_cancion", cancion.getId(),
                                        "titulo", cancion.getTitulo(),
                                        "audio", cancion.getAudio(),
                                        "pista_subtitulo", cancion.getSubtitulo(),
                                        "imagen", cancion.getImagen(),
                                        "artista", Map.of(
                                                "id", cancion.getArtista().getId(),
                                                "nombre", cancion.getArtista().getNombre()),
                                        "album", Map.of(
                                                "id", cancion.getAlbum().getId(),
                                                "titulo", cancion.getAlbum().getTitulo(),
                                                "imagen", cancion.getAlbum().getImagen()));
                            })
                            .collect(Collectors.toList());

                    playlistData.put("canciones", cancionesData);
                    return ResponseHelper.enviarRespuesta(true, "Playlist obtenida", playlistData);
                })
                .orElse(ResponseHelper.enviarRespuesta(false, "Playlist no encontrada"));
    }

    @Transactional
    public Map<String, Object> agregarCancionAPlaylist(Long playlistId, Long cancionId) {
        if (playlistCancionRepository.existsByPlaylistIdAndCancionId(playlistId, cancionId)) {
            return ResponseHelper.enviarRespuesta(false, "La canción ya existe en la playlist");
        }

        var playlistOpt = playlistRepository.findById(playlistId);
        var cancionOpt = cancionRepository.findById(cancionId);

        if (playlistOpt.isEmpty()) {
            return ResponseHelper.enviarRespuesta(false, "Playlist no encontrada");
        }

        if (cancionOpt.isEmpty()) {
            return ResponseHelper.enviarRespuesta(false, "Canción no encontrada");
        }

        PlaylistCancion pc = PlaylistCancion.builder()
                .playlist(playlistOpt.get())
                .cancion(cancionOpt.get())
                .build();

        playlistCancionRepository.save(pc);
        return ResponseHelper.enviarRespuesta(true, "Canción agregada", Collections.emptyList());
    }

    @Transactional
    public Map<String, Object> eliminarCancionDePlaylist(Long playlistId, Long cancionId) {
        int eliminados = playlistCancionRepository.deleteByPlaylistIdAndCancionId(playlistId, cancionId);

        if (eliminados == 0) {
            return ResponseHelper.enviarRespuesta(false, "La canción no estaba en la playlist");
        }

        return ResponseHelper.enviarRespuesta(true, "Canción eliminada de la playlist");
    }

}