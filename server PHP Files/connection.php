<?php 
class dbConn{
    private $db;
    function __construct($servername, $username, $password,$dbname){
        // Create connection
        $conn = new mysqli($servername, $username, $password,$dbname);

        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
    
        $this->db = $conn;
    }

    public function getDB(){
           return $this->db;
        
    }
}










?>