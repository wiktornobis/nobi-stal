<?php

require("connect.php");

$firstName = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];

$sql = "INSERT INTO users(IDUser, Imię, Email, Tekst) VALUES ('', '$firstName', '$email', '$message')";
$result = $conn->query($sql);

?>