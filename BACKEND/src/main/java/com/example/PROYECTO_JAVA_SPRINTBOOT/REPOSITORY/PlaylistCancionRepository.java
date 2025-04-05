package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.PlaylistCancion;

public interface PlaylistCancionRepository extends JpaRepository<PlaylistCancion, Long> {
    boolean existsByPlaylistIdAndCancionId(Long playlistId, Long cancionId);

    @Modifying
    @Query("DELETE FROM PlaylistCancion pc WHERE pc.playlist.id = :playlistId AND pc.cancion.id = :cancionId")
    int deleteByPlaylistIdAndCancionId(@Param("playlistId") Long playlistId, @Param("cancionId") Long cancionId);

}
