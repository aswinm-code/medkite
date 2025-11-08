<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1️⃣ Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // 2️⃣ Validate required fields
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "Please fill in all required fields.";
        exit;
    }

    // 3️⃣ Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // 4️⃣ Define recipient email
    $to = "aswinmsuthan7025@gmail.com"; // 👈 replace with your email

    // 5️⃣ Compose the email
    $mail_subject = "Medkite Contact Form: $subject";
    $mail_body = "You have received a new message from your website:\n\n" .
                 "Name: $name\n" .
                 "Email: $email\n" .
                 "Phone: $phone\n\n" .
                 "Message:\n$message\n";

    // 6️⃣ Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // 7️⃣ Send the email
    if (mail($to, $mail_subject, $mail_body, $headers)) {
        echo "<h3>✅ Message sent successfully! Thank you, $name.</h3>";
    } else {
        echo "<h3>❌ Sorry, your message could not be sent. Try again later.</h3>";
    }
} else {
    echo "Invalid request method.";
}
?>
