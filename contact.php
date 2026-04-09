<?php
// Strictly allow requests from our origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle OPTIONS pre-flight requests (important for Fetch/Axios in React)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Mail server / Routing configuration
$recipient_email = "info@solutionswithang.com"; // Where the email will arrive
$official_sender = "info@solutionswithang.com"; // Must be an email that exists in the hosting server
$subject_prefix = "[Web Contact] - ";

// Get raw data (JSON that Axios/Fetch will send from React)
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// If php://input is empty (fallback for x-www-form-urlencoded forms just in case)
if (empty($data)) {
    $data = $_POST;
}

// Validate that the minimum required data was sent
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400); // 400 Bad Request
    echo json_encode(["success" => false, "message" => "Missing required fields. Please complete your name, email, and message!"]);
    exit();
}

// Sanitize Inputs (Protect against XSS and malicious line breaks)
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$reason = isset($data['reason']) ? htmlspecialchars(strip_tags(trim($data['reason']))) : "General Contact";
$message_body = htmlspecialchars(strip_tags(trim($data['message'])));

// Validate user's Email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400); 
    echo json_encode(["success" => false, "message" => "The email format is invalid."]);
    exit();
}

// Build the final Email Subject
$final_subject = $subject_prefix . $reason;

// Build the HTML Email Body
$email_html = "
<html>
<head>
  <title>New message from Solutions With Ang</title>
</head>
<body style='font-family: Arial, sans-serif; color: #333;'>
  <h2>You have a new contact message</h2>
  <p><strong>Name:</strong> {$name}</p>
  <p><strong>Contact Email:</strong> <a href='mailto:{$email}'>{$email}</a></p>
  <p><strong>Subject:</strong> {$reason}</p>
  <hr style='border: none; border-top: 1px solid #ccc; margin: 20px 0;'>
  <p><strong>Message:</strong></p>
  <p style='background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;'>{$message_body}</p>
</body>
</html>
";

// Mandatory headers for HTML emails and to pass SPAM filters
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// Essential: The From email MUST exist on the server
$headers .= "From: Solutions With Ang Web <{$official_sender}>" . "\r\n";
// Reply-TO ensures that clicking 'Reply' in your mail client goes to the visitor's email
$headers .= "Reply-To: {$name} <{$email}>" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Attempt to send the email using local PHP mail native function
$email_sent = mail($recipient_email, $final_subject, $email_html, $headers);

// Respond to React
if ($email_sent) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Message sent successfully! Angela will be in touch soon."]);
} else {
    // If the server fails to send the email, we return a 500 error (Internal Server Error)
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "An internal server error occurred. Please try again later or contact us directly."]);
}
?>
