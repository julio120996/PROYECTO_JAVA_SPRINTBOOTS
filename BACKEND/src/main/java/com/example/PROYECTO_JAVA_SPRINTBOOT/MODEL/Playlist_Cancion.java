package com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Playlist_Cancion {
    
    private int id;
    private int id_playlist;
    private int id_cancion;
}
