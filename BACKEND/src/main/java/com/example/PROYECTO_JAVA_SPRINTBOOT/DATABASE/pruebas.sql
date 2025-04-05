USE NekoSound;

SELECT * FROM usuarios;¿

SELECT id_cancion, titulo, pista_subtitulo, imagen FROM canciones WHERE id_cancion = 278;


SELECT * FROM playlists;
SELECT * FROM playlist_canciones;

SELECT u.id_usuario ,pl.id_playlist , u.nombre as Usuario  , pl.nombre as playlist   ,c.titulo  as cancion , al.titulo as albun , ar.nombre as artista FROM playlists  as pl
INNER JOIN playlist_canciones AS pc on pl.id_playlist = pc.id_playlist
INNER JOIN usuarios as u ON  u.id_usuario = pl.id_usuario
INNER JOIN canciones as c ON c.id_cancion = pc.id_cancion
INNER JOIN albumes as al ON al.id_album = c.id_album
INNER JOIN artistas as ar on ar.id_artista = c.id_artista
WHERE u.id_usuario = 1 or pl.id_playlist = 1;
;