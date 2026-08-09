<?php

if($_GET['endpoint']){
    $endpoint = $_GET['endpoint'];
    $method = $_SERVER['REQUEST_METHOD'];

    if($endpoint == 'users'  && $method == 'GET'){
        echo "<h1>Users List $method</h1>";
    }elseif($endpoint == 'user-create'  && $method == 'POST'){
        echo "<h1>Create User $method</h1>";
    }elseif($endpoint == 'user-update' && $method == 'PUT'){
        echo "<h1>Update User $method</h1>";
    }elseif($endpoint == 'user-delete' && $method == 'DELETE'){
        echo "<h1>Delete User $method</h1>";
    }elseif($endpoint == 'user-details' && $method == 'GET'){
        echo "<h1>User Details $method</h1>";
    }
}else{
    echo "<h1>No endpoint specified.</h1>";
}

?>