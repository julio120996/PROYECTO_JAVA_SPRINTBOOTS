<?php
// URL de prueba para verificar si la API está encendida
$url = "http://localhost:8081/archivos/buscar/img-1";

// Función para verificar si la API responde
function apiEstaEncendida($url) {
    $headers = @get_headers($url);
    return $headers && strpos($headers[0], '200') !== false;
}

// Si la API no está encendida, intenta iniciarla
if (!apiEstaEncendida($url)) {
    // Ruta donde se encuentra el proyecto Spring Boot
    $rutaProyecto = "C:\\laragon\\www\\Proyectos_importante\\PROYECTO_STREAMING_TALLER_WEB\\BACKEND\\APP\\API\\apimusica";
    
    // Comando para iniciar la API en segundo plano
    $command = "start /B cmd /c \"cd /d $rutaProyecto && mvnw.cmd spring-boot:run\"";
    exec($command);

    // Espera hasta que la API esté lista (máximo 20 segundos)
    $maxAttempts = 10;
    $attempts = 0;
    do {
        sleep(2); // Espera 2 segundos
        $attempts++;
    } while (!apiEstaEncendida($url) && $attempts < $maxAttempts);
}

// La API ya está encendida en este punto y puedes hacer consultas
echo "La API está encendida y lista para recibir solicitudes.";

?>
