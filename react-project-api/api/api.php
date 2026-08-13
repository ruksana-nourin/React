<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method:GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers:POST, OPTIONS");


require_once "../config/db.php";
require_once "../model/user.class.php";
require_once "user-api.php";

if($_GET['endpoint']){
    $endpoint = $_GET['endpoint'];
    $method = $_SERVER['REQUEST_METHOD'];

    if($endpoint == 'users'  && $method == 'GET'){
        getUsers();
    }elseif($endpoint == 'user-create'  && $method == 'POST'){
        echo "<h1>Create User $method</h1>";
    }elseif($endpoint == 'user-update' && $method == 'PUT'){
        echo "<h1>Update User $method</h1>";
    }elseif($endpoint == 'user-delete' && $method == 'DELETE'){
        echo "<h1>Delete User $method</h1>";
    }elseif($endpoint == 'user-details' && $method == 'GET'){
       $id=$_GET['id'];
       getUserById($id);
    }else{
        http_response_code(404);
    }
}else{
    http_response_code(100);
    echo "<h1>No endpoint specified.</h1>";
}

?>