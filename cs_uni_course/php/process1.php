<?php
session_start();
include 'db.php'; // Include your database connection

function authenticate_user($email, $password) {
    global $conn;
    $email = $conn->real_escape_string($email);
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        return $user;
    }
    return false;
}

function register_user($name, $phone, $email, $password) {
    global $conn;
    $name = $conn->real_escape_string($name);
    $phone = $conn->real_escape_string($phone);
    $email = $conn->real_escape_string($email);
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (name, phone, email, password) VALUES ('$name', '$phone', '$email', '$hashed_password')";
    return $conn->query($sql);
}

// Debugging output, remove this in production
// var_dump($_POST);
// die;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['login'])) {
        $email = $_POST['login_email'];
        $password = $_POST['login_password'];

        $user = authenticate_user($email, $password);
        if ($user) {
            $_SESSION['user'] = $user['name'];
            header("Location: /cs_uni_course/html/Landing_Page.html");
            exit;
        } else {
            $_SESSION['error'] = "Invalid email or password.";
            header("Location: /cs_uni_course/process.php");
            exit;
        }
    } elseif (isset($_POST['register'])) {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        if (register_user($name, $phone, $email, $password)) {
            $_SESSION['user'] = $name;
            header("Location: /cs_uni_course/html/Landing_Page.html");
            exit;
        } else {
            $_SESSION['error'] = "Registration failed. Please try again.";
            header("Location: /cs_uni_course/process.php");
            exit;
        }
    }
}
?>
