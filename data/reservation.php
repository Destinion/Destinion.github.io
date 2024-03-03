<?php
//sanitizace dat
$name = htmlspecialchars($_POST['name']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($_POST['phone']);
$date = htmlspecialchars($_POST['date']);
$time = htmlspecialchars($_POST['time']);
$people = intval($_POST['people']);


// Potvrzení požadavku objednávky
$response = ['status' => 'success', 'message' => 'Reservation successful!'];

header('Content-Type: application/json');
echo json_encode($response);
?>