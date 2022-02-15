<?php 
require_once 'database.php';

// Takes raw data from the request
$json = file_get_contents('php://input');


if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Converts it into a PHP object
    $data = json_decode($json);
    $connectionClass = new dbConn("localhost","root", null,"contactdatabase");
    $dbSectionClass = new dbSelect($connectionClass->getDB());
    

        $data = $dbSectionClass->runQuery("UPDATE contact SET Fname='$data->fname',Lname='$data->lname',company='$data->companyName',houseNo='$data->houseNo',city='$data->city',states='$data->states',country='$data->country',telephone='$data->telephone',mobile='$data->mobile',email='$data->email' WHERE id = $data->id");
    
    print(json_encode($data));

}


?>