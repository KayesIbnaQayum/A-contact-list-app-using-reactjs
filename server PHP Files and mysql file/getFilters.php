<?php 
require_once 'database.php';


$connectionClass = new dbConn("localhost","root", null,"contactdatabase");
$dbSectionClass = new dbSelect($connectionClass->getDB());
$output = [];

$data = $dbSectionClass->selectQuery("SELECT DISTINCT country from contact");
array_push($output, $data);

$data = $dbSectionClass->selectQuery("SELECT DISTINCT states from contact");
array_push($output, $data);

$data = $dbSectionClass->selectQuery("SELECT DISTINCT city from contact");
array_push($output, $data);


print(json_encode($output));



?>