package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Canciones;

public interface CancionRepository extends JpaRepository<Canciones, Long> {

    @Query("SELECT COUNT(c) FROM Canciones c WHERE c.album.id = :idAlbum")
    int countByAlbumId(@Param("idAlbum") Long idAlbum);
/*devuelve una lista de canciones seleccionadas aleatoriamente junto con la imagen del álbum al que pertenecen */
    @Query(value = """
                SELECT c.id_cancion AS id, c.titulo, c.audio,
                       COALESCE(NULLIF(c.imagen, ''), a.imagen) AS imagen
                FROM canciones c
                INNER JOIN albumes a ON c.id_album = a.id_album
                ORDER BY RAND()
                LIMIT 10
            """, nativeQuery = true)
    List<Object[]> findRandomSongsWithAlbumImage();
    
/*Recupera una lista de canciones de un álbum específico, junto con detalles del álbum y del artista */
    @Query(value = """
                SELECT al.id_album, al.titulo AS album_titulo, al.fecha_lanzamiento, al.imagen AS album_imagen,
                       a.id_artista, a.nombre AS artista_nombre, a.pais AS artista_pais,
                       c.id_cancion, c.titulo AS cancion_titulo, c.audio, c.pista_subtitulo,
                       COALESCE(NULLIF(c.imagen, ''), al.imagen) AS cancion_imagen
                FROM canciones c
                INNER JOIN albumes al ON al.id_album = c.id_album
                INNER JOIN artistas a ON al.id_artista = a.id_artista
                WHERE al.id_album = :idAlbum
                ORDER BY c.id_cancion
            """, nativeQuery = true)
    List<Object[]> findSongsByAlbum(@Param("idAlbum") Long idAlbum);

}