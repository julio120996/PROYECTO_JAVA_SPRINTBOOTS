package com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Album;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Integer> {
   
       @Query("""
                         SELECT a.id AS idAlbum, a.titulo AS titulo, a.idArtista AS idArtista, ar.nombre AS nombreArtista, a.imagen AS imagen
                         FROM Album a INNER JOIN Artistas ar ON a.idArtista = ar.id
                     """)
       List<AlbumProjection> findAllAlbums();
    
       @Query("""
                         SELECT a.id AS idAlbum, a.titulo AS titulo, a.idArtista AS idArtista, ar.nombre AS nombreArtista, a.imagen AS imagen
                         FROM Album a INNER JOIN Artistas ar ON a.idArtista = ar.id ORDER BY FUNCTION('RAND') LIMIT 10
                     """)
       List<AlbumProjection> findPopularAlbums();

       @Query("""
                         SELECT a.id AS idAlbum, a.titulo AS titulo, a.idArtista AS idArtista, ar.nombre AS nombreArtista, a.imagen AS imagen
                         FROM Album a INNER JOIN Artistas ar ON a.idArtista = ar.id ORDER BY FUNCTION('RAND') LIMIT 10
                     """)
       List<AlbumProjection> findTrendingAlbums();

       @Query("""
                         SELECT a.id AS idAlbum, a.titulo AS titulo, a.idArtista AS idArtista, ar.nombre AS nombreArtista, a.imagen AS imagen
                         FROM Album a INNER JOIN Artistas ar ON a.idArtista = ar.id ORDER BY FUNCTION('RAND') LIMIT 10
                     """)
       List<AlbumProjection> findMostListenedAlbums();
}