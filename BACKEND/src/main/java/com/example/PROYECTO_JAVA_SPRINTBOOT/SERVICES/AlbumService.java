package com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.AlbumProjection;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.AlbumRepository;

@Service
public class AlbumService {
    @Autowired
    private AlbumRepository albumRepository;
    
    public List<AlbumProjection> obtenerAlbumes() {
        return albumRepository.findAllAlbums();
    }

    public List<AlbumProjection> obtenerAlbumesPopulares() {
        return albumRepository.findPopularAlbums();
    }

    public List<AlbumProjection> obtenerAlbumesTendencia() {
        return albumRepository.findTrendingAlbums();
    }

    public List<AlbumProjection> obtenerAlbumesMasEscuchados() {
        return albumRepository.findMostListenedAlbums();
    }
}
