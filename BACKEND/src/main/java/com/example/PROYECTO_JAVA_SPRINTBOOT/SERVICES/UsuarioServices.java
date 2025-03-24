package com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.UsuarioRepository;
import com.example.PROYECTO_JAVA_SPRINTBOOT.UTIL.ResponseHelper;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UsuarioServices {

    private final UsuarioRepository usuarioRepository;
    private final cloudinaryServices cloudinaryService;

    public Map<String, Object> agregarUsuario(Usuario usuario, MultipartFile foto_perfil) {
        try {
            // Subida de la foto de perfil a Cloudinary si está presente
            if (foto_perfil != null && !foto_perfil.isEmpty()) {
                System.out.println("Subiendo archivo: " + foto_perfil.getOriginalFilename());
                Map<String, Object> subida = cloudinaryService.subirImagen(foto_perfil);
                if (!(boolean) subida.get("success")) {
                    return ResponseHelper.enviarRespuesta(false, "Error al subir la imagen");
                }
                usuario.setFotoPerfil((String) subida.get("url"));
                System.out.println("URL almacenada: " + usuario.getFotoPerfil());
            } else {
                System.out.println("El foto_perfil está vacío o es nulo");
            }
    
            // Verificar si el usuario se registra con Google o con contraseña
            if (usuario.getPassword() != null && !usuario.getPassword().isEmpty()) {
                usuario.setIdAutenticacionExterna(null);  // Si hay contraseña, el ID externo es nulo
            } else if (usuario.getIdAutenticacionExterna() != null) {
                usuario.setPassword(null);  // Si hay autenticación externa, el password es nulo
            }
    
            usuarioRepository.save(usuario);
            return ResponseHelper.enviarRespuesta(true, "Usuario agregado correctamente", usuario);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseHelper.enviarRespuesta(false, "Error al agregar usuario: " + e.getMessage());
        }
    }
    
    
    
    
    
    
    
    

    public Map<String, Object> listarUsuarios() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        return ResponseHelper.enviarRespuesta(true, "Usuarios obtenidos correctamente", usuarios);
    }

    public Map<String, Object> verificarUsuario(Long idUsuario) {
        Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
        return usuario.map(value -> ResponseHelper.enviarRespuesta(true, "El usuario existe", value))
                .orElseGet(() -> ResponseHelper.enviarRespuesta(false, "El usuario no existe"));
    }

    public Map<String, Object> actualizarUsuario(Usuario usuarioActualizado) {
        Usuario usuario = usuarioRepository.findById(usuarioActualizado.getId())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        usuario.setNombre(usuarioActualizado.getNombre());
        usuario.setApellido(usuarioActualizado.getApellido());
        usuario.setEmail(usuarioActualizado.getEmail());
        usuario.setPassword(usuarioActualizado.getPassword());
        usuario.setFotoPerfil(usuarioActualizado.getFotoPerfil());

        usuarioRepository.save(usuario);
        return ResponseHelper.enviarRespuesta(true, "Usuario actualizado correctamente", usuario);
    }

    public Map<String, Object> actualizarFotoPerfil(Long usuarioId, MultipartFile archivo) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Eliminar imagen anterior si existe
        if (usuario.getFotoPerfil() != null) {
            cloudinaryService.eliminarImagen(usuario.getFotoPerfil());
        }

        Map<String, Object> subida = cloudinaryService.subirImagen(archivo);
        if (!(boolean) subida.get("success")) {
            return ResponseHelper.enviarRespuesta(false, "Error al subir nueva imagen");
        }

        usuario.setFotoPerfil((String) subida.get("url"));
        usuarioRepository.save(usuario);

        return ResponseHelper.enviarRespuesta(true, "Imagen de perfil actualizada correctamente", usuario);
    }
}
