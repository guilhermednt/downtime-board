<?php

$auth = filter_var($_POST['auth'], FILTER_SANITIZE_STRING);

if ($auth !== '1234') {
    die('403');
}

var_dump(shell_exec('./register-downtime.sh'));
