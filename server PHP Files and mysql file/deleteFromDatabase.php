<?php 
require_once 'database.php';

// Takes raw data from the request
$json = file_get_contents('php://input');


if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Converts it into a PHP object
    $data = json_decode($json);
    $connectionClass = new dbConn("localhost","root", null,"contactdatabase");
    $dbSectionClass = new dbSelect($connectionClass->getDB());
    $status = $dbSectionClass->runQuery("DELETE FROM contact WHERE contact.id = '$data->id'");
    echo json_encode($status);
}






?>