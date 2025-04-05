package com.example.PROYECTO_JAVA_SPRINTBOOT.CONTROLLER;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PROYECTO_JAVA_SPRINTBOOT.DTO.ActualizarPlaylistRequest;
import com.example.PROYECTO_JAVA_SPRINTBOOT.DTO.CrearPlaylistRequest;
import com.example.PROYECTO_JAVA_SPRINTBOOT.DTO.EliminarPlaylistRequest;
import com.example.PROYECTO_JAVA_SPRINTBOOT.DTO.ObtenerPlaylistRequest;
import com.example.PROYECTO_JAVA_SPRINTBOOT.DTO.PlaylistCancionRequest;
import com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES.PlaylistService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/playlist")
@RequiredArgsConstructor
public class PlaylistController {

        private final PlaylistService playlistService;

        // GET /playlist/listar/{id_usuario}
        @GetMapping("/listar/{id_usuario}")
        public ResponseEntity<Map<String, Object>> listarPlaylistsUsuario(@PathVariable("id_usuario") Long usuarioId) {
                return ResponseEntity.ok(playlistService.listarPlaylistsPorUsuario(usuarioId));
        }

        // POST /playlist/crear
        @PostMapping("/crear")
        public ResponseEntity<Map<String, Object>> crearPlaylist(@RequestBody CrearPlaylistRequest request) {
                Map<String, Object> respuesta = playlistService.crearPlaylist(request.getNombre(),
                                request.getId_usuario());
                return ResponseEntity.status((boolean) respuesta.get("success") ? 201 : 400).body(respuesta);
        }

        // PUT /playlist/actualizar
        @PutMapping("/actualizar")
        public ResponseEntity<Map<String, Object>> actualizarPlaylist(@RequestBody ActualizarPlaylistRequest request) {
                Map<String, Object> respuesta = playlistService.actualizarPlaylist(request.getId_playlist(),
                                request.getId_usuario(), request.getNombre());
                return respuestaExitoOError(respuesta);
        }

        // DELETE /playlist/eliminar
        @DeleteMapping("/eliminar")
        public ResponseEntity<Map<String, Object>> eliminarPlaylist(@RequestBody EliminarPlaylistRequest request) {
                Map<String, Object> respuesta = playlistService.eliminarPlaylist(request.getId_playlist(),
                                request.getId_usuario());
                return respuestaExitoOError(respuesta);
        }

        // POST /playlist/usuario
        @PostMapping("/usuario")
        public ResponseEntity<Map<String, Object>> obtenerPlaylistDetallada(
                        @RequestBody ObtenerPlaylistRequest request) {
                return ResponseEntity.ok(playlistService.obtenerPlaylistDetallada(request.getId_usuario(),
                                request.getId_playlist()));
        }

        // POST /playlist/agregar-cancion
        @PostMapping("/agregar-cancion")
        public ResponseEntity<Map<String, Object>> agregarCancionAPlaylist(
                        @RequestBody PlaylistCancionRequest request) {
                Map<String, Object> respuesta = playlistService.agregarCancionAPlaylist(request.getId_playlist(),
                                request.getId_cancion());
                return respuestaExitoOError(respuesta);
        }

        @DeleteMapping("/eliminar-cancion")
        public ResponseEntity<Map<String, Object>> eliminarCancionDePlaylist(
                        @RequestBody PlaylistCancionRequest request) {
                Map<String, Object> respuesta = playlistService.eliminarCancionDePlaylist(
                                request.getId_playlist(), request.getId_cancion());
                return respuestaExitoOError(respuesta);
        }

        private ResponseEntity<Map<String, Object>> respuestaExitoOError(Map<String, Object> respuesta) {
                return (boolean) respuesta.get("success") ? ResponseEntity.ok(respuesta)
                                : ResponseEntity.badRequest().body(respuesta);
        }
}
