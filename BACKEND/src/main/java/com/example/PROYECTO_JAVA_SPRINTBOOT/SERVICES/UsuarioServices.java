package com.example.PROYECTO_JAVA_SPRINTBOOT.SERVICES;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.PROYECTO_JAVA_SPRINTBOOT.MODEL.Usuario;
import com.example.PROYECTO_JAVA_SPRINTBOOT.REPOSITORY.UsuarioRepository;
import com.example.PROYECTO_JAVA_SPRINTBOOT.UTIL.ResponseHelper;

import lombok.RequiredArgsConstructor;

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
                usuario.setIdAutenticacionExterna(null); // Si hay contraseña, el ID externo es nulo
            } else if (usuario.getIdAutenticacionExterna() != null) {
                usuario.setPassword(null); // Si hay autenticación externa, el password es nulo
            }

            usuarioRepository.save(usuario);
            return ResponseHelper.enviarRespuesta(true, "Usuario agregado correctamente");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseHelper.enviarRespuesta(false, "Error al agregar usuario: " + e.getMessage());
        }
    }

    public Map<String, Object> actualizarUsuario(Long id, String nombre, String apellido, MultipartFile nuevaFoto) {
        try {
            Usuario usuario = usuarioRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

            // Actualizar nombre y apellido
            usuario.setNombre(nombre);
            usuario.setApellido(apellido);

            // Si se recibe una nueva foto, eliminar la anterior y subir la nueva
            if (nuevaFoto != null && !nuevaFoto.isEmpty()) {
                if (usuario.getFotoPerfil() != null) {
                    cloudinaryService.eliminarImagen(usuario.getFotoPerfil());
                }

                Map<String, Object> subida = cloudinaryService.subirImagen(nuevaFoto);
                if (!(boolean) subida.get("success")) {
                    return ResponseHelper.enviarRespuesta(false, "Error al subir la nueva imagen");
                }
                usuario.setFotoPerfil((String) subida.get("url"));
            }

            usuarioRepository.save(usuario);
            return ResponseHelper.enviarRespuesta(true, "Usuario actualizado correctamente", usuario);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseHelper.enviarRespuesta(false, "Error al actualizar usuario: " + e.getMessage());
        }
    }

    public Map<String, Object> actualizarPassword(String email, String nuevaPassword) {
        try {
            Usuario usuario = usuarioRepository.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

            if (usuario.getIdAutenticacionExterna() != null) {
                return ResponseHelper.enviarRespuesta(false,
                        "No se puede actualizar la contraseña de un usuario con autenticación externa.");
            }

            usuario.setPassword(nuevaPassword);
            usuarioRepository.save(usuario);

            return ResponseHelper.enviarRespuesta(true, "Contraseña actualizada correctamente", new HashMap<>());

        } catch (Exception e) {
            return ResponseHelper.enviarRespuesta(false, "Error al actualizar la contraseña: " + e.getMessage());
        }
    }

    public Map<String, Object> verificarUsuario(String email) {
        try {
            Optional<Usuario> usuarioOptional = usuarioRepository.findByEmail(email);

            if (usuarioOptional.isEmpty()) {
                return ResponseHelper.enviarRespuesta(false, "Usuario no encontrado");
            }

            Usuario usuario = usuarioOptional.get();
            Map<String, Object> datos = new LinkedHashMap<>(); // Usar LinkedHashMap para mantener el orden
            datos.put("id_usuario", usuario.getId());
            datos.put("id_autenticacion_externa", usuario.getIdAutenticacionExterna());

            return ResponseHelper.enviarRespuesta(true, "El usuario existe", datos);
        } catch (Exception e) {
            return ResponseHelper.enviarRespuesta(false, "Error al verificar usuario: " + e.getMessage());
        }
    }

    public Map<String, Object> loginUsuario(String email, String password, String idAutenticacionExterna) {
        try {
            Optional<Usuario> usuarioOptional = Optional.empty();

            if (email != null && password != null) {
                // Buscar usuario por email
                usuarioOptional = usuarioRepository.findByEmail(email);
                if (usuarioOptional.isEmpty()) {
                    return ResponseHelper.enviarRespuesta(false, "Usuario no encontrado");
                }

                Usuario usuario = usuarioOptional.get();
                if (!usuario.getPassword().equals(password)) {
                    return ResponseHelper.enviarRespuesta(false, "Contraseña incorrecta");
                }

            } else if (idAutenticacionExterna != null) {
                // Buscar usuario por ID de autenticación externa
                usuarioOptional = usuarioRepository.findByIdAutenticacionExterna(idAutenticacionExterna);
                if (usuarioOptional.isEmpty()) {
                    return ResponseHelper.enviarRespuesta(false, "Usuario no encontrado");
                }
            } else {
                return ResponseHelper.enviarRespuesta(false,
                        "Debe proporcionar email y contraseña o ID de autenticación externa");
            }

            // Si llegó aquí, el usuario fue autenticado correctamente
            Usuario usuario = usuarioOptional.get();

            // Crear la estructura de respuesta con el mismo formato de PHP
            Map<String, Object> data = new LinkedHashMap<>(); // Usamos LinkedHashMap para mantener el orden
            data.put("id_usuario", usuario.getId()); // Ahora usa "id_usuario" en vez de "id"
            data.put("nombre", usuario.getNombre());
            data.put("apellido", usuario.getApellido());
            data.put("email", usuario.getEmail());
            data.put("password", usuario.getPassword());
            data.put("foto_perfil", usuario.getFotoPerfil());
            data.put("fecha_registro", usuario.getFechaRegistro().toString()); // Asegura que la fecha se incluya
            data.put("id_autenticacion_externa", usuario.getIdAutenticacionExterna());

            return ResponseHelper.enviarRespuesta(true, "Login exitoso", data);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseHelper.enviarRespuesta(false, "Error al iniciar sesión: " + e.getMessage());
        }
    }

    public Map<String, Object> listarUsuarios() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        return ResponseHelper.enviarRespuesta(true, "Usuarios obtenidos correctamente", usuarios);
    }

}
