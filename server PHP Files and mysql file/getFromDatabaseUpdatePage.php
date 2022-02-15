<?php 
require_once 'database.php';

// Takes raw data from the request
$json = file_get_contents('php://input');


if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Converts it into a PHP object

    $data = json_decode($json);
    $connectionClass = new dbConn("localhost","root", null,"contactdatabase");
    $dbSectionClass = new dbSelect($connectionClass->getDB());
    
    if(isset($data->data)){
        $data = $dbSectionClass->selectQuery("Select * from contact where id = $data->data");
    }
    print(json_encode($data));

}


?>