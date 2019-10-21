<?php
class Department{
    // database connection and table name
    private $conn;
    private $table_name = "department";
    // object properties
    public $id;
    public $name;
    public $description;
    public $date_create;
    // public $email;
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    // read products
function getAll(){
    
        // select all query
        $query = "SELECT * FROM ".$this->table_name." ORDER BY id DESC" ;
        
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
        return $stmt;
    }
function getOneByID($id){
        // select all query
        $query = "SELECT * FROM ".$this->table_name." WHERE id = ".$id."" ;
        
        // prepare query statement
        
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
        return $stmt;
    }
function getOneByname($name){
        // select all query
        $query = "SELECT * FROM ".$this->table_name." WHERE name = '".$name."'" ;
        
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if($row >0){
            //echo('true');die;
            return true;
        }
        //echo('false');die;
        return false;
}
function updateByID($id){
    // select all query
        $query = "UPDATE ".$this->table_name." SET description = '".$this->description."' WHERE id = ".$id."" ;

    // prepare query statement
    $stmt = $this->conn->prepare($query);
    // execute query
    //var_dump($stmt);die;
    if($stmt->execute()){
        return true;
    }
    return false;
}          
function updateFlagByID($id){
    
        // select all query
        $query = "UPDATE ".$this->table_name." SET ".$name."=".$value." WHERE id = ".$id."" ;
        //echo $query;die;
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        if($stmt->execute()){
            return true;
        }
        return false;
    }    
// used when filling up the update product form
function del($id){
 
    // query to read single record
    $query = "DELETE FROM " . $this->table_name . " WHERE id = ".$id;
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
    
    try{
        //var_dump($stmt);die;
        // execute query
        if($stmt->execute()){
            return true;
        }
    }catch (Exception $e){
        echo($e);
    }
        return false;
}
    // create product
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                name=:name, description=:description";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->description=htmlspecialchars(strip_tags($this->description));
    // $this->email=htmlspecialchars(strip_tags($this->email));
 
    // bind values
    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":description", $this->description);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
}