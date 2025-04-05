package com.example.PROYECTO_JAVA_SPRINTBOOT.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class PlaylistCancionRequest {
    private Long id_playlist;
    private Long id_cancion;
}