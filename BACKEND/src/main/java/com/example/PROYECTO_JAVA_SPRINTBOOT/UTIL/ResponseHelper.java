package com.example.PROYECTO_JAVA_SPRINTBOOT.UTIL;
import java.util.HashMap;
import java.util.Map;
public class ResponseHelper {
    public static Map<String, Object> enviarRespuesta(boolean exito, String mensaje) {
        Map<String, Object> respuesta = new HashMap<>();
        respuesta.put("success", exito);
        respuesta.put("message", mensaje);
        return respuesta;
    }

    public static <T> Map<String, Object> enviarRespuesta(boolean exito, String mensaje, T datos) {
        Map<String, Object> respuesta = new HashMap<>();
        respuesta.put("success", exito);
        respuesta.put("message", mensaje);
        respuesta.put("data", datos);
        return respuesta;
    }

}
