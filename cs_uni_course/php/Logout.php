<?php
session_start();
session_unset();
session_destroy();
header("Location: /cs_uni_course/html/Login&Register.html");
exit();