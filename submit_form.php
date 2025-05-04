<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Send email (you need to configure a mail server)
    $to = "roaaqarnia@gmail.com";
    $subject = "New Message from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: no-reply@yourdomain.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending the message.";
    }
} else {
    echo "Invalid request.";
}
?>

