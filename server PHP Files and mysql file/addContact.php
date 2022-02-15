<?php 
require_once 'database.php';

// Takes raw data from the request
$json = file_get_contents('php://input');


if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Converts it into a PHP object
    $data = json_decode($json);
    $data = $data->data;
    $connectionClass = new dbConn("localhost","root", null,"contactdatabase");
    $dbSectionClass = new dbSelect($connectionClass->getDB());
    $status = $dbSectionClass->runQuery("INSERT INTO contact (id, pic, Fname, Lname, company, houseNo,city,states,country, telephone, mobile, email) VALUES (NULL, 'pp','$data->fname', '$data->lname', '$data->companyName', '$data->houseNo', '$data->city', '$data->states', '$data->country','$data->telephone','$data->mobile', '$data->email')");
    echo json_encode($status);
}






?>