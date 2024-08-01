<?php
session_start();
include 'db.php'; // Include your database connection

function authenticate_user($email, $password) {
    global $conn;
    $email = $conn->real_escape_string($email);
    $password = $conn->real_escape_string($password);

    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);
    $user = $result->fetch_assoc();

    return $user;
}

function register_user($name, $phone, $email, $password) {
    global $conn;
    $name = $conn->real_escape_string($name);
    $phone = $conn->real_escape_string($phone);
    $email = $conn->real_escape_string($email);
    $password = $conn->real_escape_string($password);

    $sql = "INSERT INTO users (name, phone, email, password) VALUES ('$name', '$phone', '$email', '$password')";
    return $conn->query($sql);
}


if (isset($_POST['login'])) {
    $email = $_POST['login_email'];
    $password = $_POST['login_password'];

    $user = authenticate_user($email, $password);
    if ($user) {
        $_SESSION['user'] = $user['name'];
        header("Location: /cs_uni_course/html/Landing_Page.html");
    } else {
        $_SESSION['error'] = "Invalid email or password.";
        header("Location: /cs_uni_course/php/process.php");
    }
} elseif (isset($_POST['register'])) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (register_user($name, $phone, $email, $password)) {
        $_SESSION['user'] = $name;
        header("Location: /cs_uni_course/html/Landing_Page.html");
    } else {
        $_SESSION['error'] = "Registration failed. Please try again.";
        header("Location: /cs_uni_course/php/process.php");
    }
}
?>
