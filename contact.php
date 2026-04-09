<?php
// Permitir peticiones desde nuestro origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Manejar peticiones OPTIONS pre-flight (importante para Fetch/Axios en React)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Configuración Ferozo / Correos
$destinatario = "info@solutionswithang.com"; // A dónde llegará el correo
$remitente_oficial = "info@solutionswithang.com"; // Debe ser un correo que exista en el Ferozo
$asunto_prefijo = "[Web Contact] - ";

// Obtener los datos crudos (JSON que enviará Axios/Fetch desde React)
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Si php://input está vacío (fallback para formularios x-www-form-urlencoded por las dudas)
if (empty($data)) {
    $data = $_POST;
}

// Validar que se enviaron los datos mínimos requeridos
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400); // 400 Bad Request
    echo json_encode(["success" => false, "message" => "Missing required fields. Please complete your name, email, and message!"]);
    exit();
}

// Sanitizar Entradas (Proteger contra XSS y saltos de línea maliciosos)
$nombre = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$motivo = isset($data['reason']) ? htmlspecialchars(strip_tags(trim($data['reason']))) : "General Contact";
$mensaje = htmlspecialchars(strip_tags(trim($data['message'])));

// Validar formato de Email del usuario
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "El formato del email no es válido."]);
    exit();
}

// Armar el Asunto del Correo
$asunto_final = $asunto_prefijo . $motivo;

// Armar el Cuerpo del Correo en HTML
$cuerpo_correo = "
<html>
<head>
  <title>Nuevo mensaje desde Solutions With Ang</title>
</head>
<body style='font-family: Arial, sans-serif; color: #333;'>
  <h2>You have a new message from Solutions With Ang</h1>
  <p><strong>Name:</strong> {$nombre}</p>
  <p><strong>email:</strong> <a href='mailto:{$email}'>{$email}</a></p>
  <p><strong>Reason:</strong> {$motivo}</p>
  <hr style='border: none; border-top: 1px solid #ccc; margin: 20px 0;'>
  <p><strong>Mensaje:</strong></p>
  <p style='background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;'>{$mensaje}</p>
</body>
</html>
";

// Headers obligatorios para correos HTML y para pasar los filtros de SPAM (Ferozo)
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// Esencial: El From TIENE que existir en el servidor
$headers .= "From: Solutions With Ang Web <{$remitente_oficial}>" . "\r\n";
// El Reply-TO hace que al darle "Responder" en tu cliente de correo, vaya al email del visitante
$headers .= "Reply-To: {$nombre} <{$email}>" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Intentar enviar el correo mediante la función nativa de PHP local
$correo_enviado = mail($destinatario, $asunto_final, $cuerpo_correo, $headers);

// Responder a React
if ($correo_enviado) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Message sent successfully! Ángela se pondrá en contacto pronto."]);
} else {
    // Si Ferozo falla enviando el correo, retornamos un error 500 (Internal Server Error)
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Hubo un error interno en el servidor enviando el correo. Por favor, inténtalo más tarde o contáctanos directamente."]);
}
?>