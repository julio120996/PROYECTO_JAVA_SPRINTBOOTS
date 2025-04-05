package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Playlist;

public interface PlaylistRepository extends JpaRepository<Playlist, Long> {
    List<Playlist> findByUsuarioId(Long usuarioId);

    Optional<Playlist> findByIdAndUsuarioId(Long id, Long usuarioId);

    // Añade este método
    boolean existsByIdAndUsuarioId(Long id, Long usuarioId);
}