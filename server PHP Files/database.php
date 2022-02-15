<?php 
require_once "connection.php";

class dbSelect{
    private $dbconn;
    function __construct($db){
        $this->dbconn = $db;
    }

    private function isConnectionOkay(){
        if (!$this->dbconn->connect_error) {
            return true;
        }else{
            return false;
        }
    }

    public function selectQuery($sqlQuery){
        if ($this->isConnectionOkay()) {
            $result = $this->dbconn->query($sqlQuery);
            $dataList = array();
                if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                   array_push($dataList,$row);
                }
                } else {
                    return 0;
                }
            return $dataList;
        }
    }

    public function runQuery($sqlQuery){
        //$sqlQuery = "INSERT INTO contact (id, pic, Fname, Lname, company, houseNo,city,states,country, telephone, mobile, email) VALUES (NULL, 'pp','$data->fname', '$data->lname', '$data->companyName', '$data->houseNo', '$data->city', '$data->states', '$data->country','$data->telephone','$data->mobile', '$data->email')";
        if($this->isConnectionOkay()){
            if ($this->dbconn->query($sqlQuery) === TRUE) {
                return true;
            } else {
                return false;
            }
        }

    }
}










?>