package com.example.PROYECTO_JAVA_SPRINTBOOT.UTIL;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/* */
public class ResponseHelper {
    public static Map<String, Object> enviarRespuesta(boolean exito, String mensaje) {
        Map<String, Object> respuesta = new HashMap<>();
        respuesta.put("success", exito);
        respuesta.put("message", mensaje);
        respuesta.put("data", new ArrayList<>()); // Asegura que data siempre sea un array vacío
        return respuesta;
    }

    public static <T> Map<String, Object> enviarRespuesta(boolean exito, String mensaje, T datos) {
        Map<String, Object> respuesta = new HashMap<>();
        respuesta.put("success", exito);
        respuesta.put("message", mensaje);
        respuesta.put("data", datos != null ? datos : new ArrayList<>()); // Si datos es null, devuelve un array vacío
        return respuesta;
    }
}
