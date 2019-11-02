<?php
class Booking{
    // database connection and table name
    private $conn;
    private $table_name = "booking";
    // object properties
public $id;
public $flag;
public $date;
public $time;
public $type_of_car;
public $customer_name;
public $customer_phone;
public $arrival_place;
public $departure_place;
public $pickup_place;
public $place_of_guest;
public $NCC;
public $price;
public $proceeds_vnd = null;
public $proceeds_usd = null;
public $revenue_vnd = null;
public $revenue_usd = null;
public $profit;
public $partner;
public $seller;
public $note;
public $user_id;
public $date_create;
public $date_update;
public $arrival_place_id;
public $departure_place_id;
public $NCC_id;
public $partner_id;
public $type_of_car_id;
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
function getlistByMonth($userid,$fromday,$today){
    // select all query
    if($userid == 0)
        $query = "SELECT * FROM ".$this->table_name." WHERE date >= ".$fromday." and date <=".$today."" ;
    else
        $query = "SELECT * FROM ".$this->table_name." WHERE user_id =".$userid." and date >= ".$fromday." and date <=".$today."" ;
        //echo $query;die;
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
    $query = "UPDATE ".$this->table_name.
    " SET date = '".$this->date.
    "', time = '".$this->time.
    "', type_of_car = '".$this->type_of_car.
    "', customer_name = '".$this->customer_name.
    "', customer_phone = '".$this->customer_phone.
    "', arrival_place = '".$this->arrival_place.
    "', departure_place = '".$this->departure_place.
    "', pickup_place = '".$this->pickup_place.
    "', place_of_guest = '".$this->place_of_guest.
    "', NCC = '".$this->NCC.
    "', price = '".$this->price.
    "', proceeds_vnd = '".$this->proceeds_vnd.
    "', proceeds_usd = '".$this->proceeds_usd.
    "', revenue_vnd = '".$this->revenue_vnd.
    "', revenue_usd = '".$this->revenue_usd.
    "', profit = '".$this->profit.
    "', partner = '".$this->partner.
    "', seller = '".$this->seller.
    "', note = '".$this->note.
    "', user_id = '".$this->user_id.
    "', arrival_place_id = '".$this->arrival_place_id.
    "', departure_place_id = '".$this->departure_place_id.
    "', NCC_id = '".$this->NCC_id.
    "', partner_id = '".$this->partner_id.
    "', type_of_car_id = '".$this->type_of_car_id.
    "', flag = '".$this->flag.
    "' WHERE id = ".$id."" ;

// prepare query statement
$stmt = $this->conn->prepare($query);
// execute query
//var_dump($stmt);die;
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
        date=:date, 
        time=:time, 
        type_of_car=:type_of_car,
        customer_name=:customer_name,
        customer_phone=:customer_phone,
        arrival_place=:arrival_place,
        departure_place=:departure_place,
        pickup_place=:pickup_place,
        place_of_guest=:place_of_guest,
        NCC=:NCC,
        price=:price,
        proceeds_vnd=:proceeds_vnd,
        proceeds_usd=:proceeds_usd,
        revenue_vnd=:revenue_vnd,
        revenue_usd=:revenue_usd,
        profit=:profit,
        partner=:partner,
        seller=:seller,
        note=:note,
        user_id=:user_id,
        arrival_place_id=:arrival_place_id,
        departure_place_id=:departure_place_id,
        NCC_id=:NCC_id,
        partner_id=:partner_id,
        type_of_car_id=:type_of_car_id"
        ;
// prepare query
$stmt = $this->conn->prepare($query);
// sanitize
$this->date=htmlspecialchars(strip_tags($this->date));
$this->time=htmlspecialchars(strip_tags($this->time));
$this->type_of_car=htmlspecialchars(strip_tags($this->type_of_car));
$this->customer_name=htmlspecialchars(strip_tags($this->customer_name));
$this->customer_phone=htmlspecialchars(strip_tags($this->customer_phone));
$this->arrival_place=htmlspecialchars(strip_tags($this->arrival_place));
$this->departure_place=htmlspecialchars(strip_tags($this->departure_place));
$this->pickup_place=htmlspecialchars(strip_tags($this->pickup_place));
$this->place_of_guest=htmlspecialchars(strip_tags($this->place_of_guest));

$this->NCC=htmlspecialchars(strip_tags($this->NCC));
$this->price=htmlspecialchars(strip_tags($this->price));
$this->proceeds_vnd=htmlspecialchars(strip_tags($this->proceeds_vnd));
$this->proceeds_usd=htmlspecialchars(strip_tags($this->proceeds_usd));
$this->revenue_vnd=htmlspecialchars(strip_tags($this->revenue_vnd));
$this->revenue_usd=htmlspecialchars(strip_tags($this->revenue_usd));
$this->profit=htmlspecialchars(strip_tags($this->profit));
$this->partner=htmlspecialchars(strip_tags($this->partner));
$this->seller=htmlspecialchars(strip_tags($this->seller));

$this->note=htmlspecialchars(strip_tags($this->note));
$this->user_id=htmlspecialchars(strip_tags($this->user_id));
$this->arrival_place_id=htmlspecialchars(strip_tags($this->arrival_place_id));
$this->departure_place_id=htmlspecialchars(strip_tags($this->departure_place_id));
$this->NCC_id=htmlspecialchars(strip_tags($this->NCC_id));
$this->partner_id=htmlspecialchars(strip_tags($this->partner_id));
$this->type_of_car_id=htmlspecialchars(strip_tags($this->type_of_car_id));
// bind values
$stmt->bindParam(":date", $this->date);
$stmt->bindParam(":time", $this->time);
$stmt->bindParam(":type_of_car", $this->type_of_car);
$stmt->bindParam(":customer_name", $this->customer_name);
$stmt->bindParam(":customer_phone", $this->customer_phone);
$stmt->bindParam(":arrival_place", $this->arrival_place);
$stmt->bindParam(":departure_place", $this->departure_place);
$stmt->bindParam(":pickup_place", $this->pickup_place);
$stmt->bindParam(":place_of_guest", $this->place_of_guest);
$stmt->bindParam(":NCC", $this->NCC);
$stmt->bindParam(":price", $this->price);
$stmt->bindParam(":proceeds_vnd", $this->proceeds_vnd);
$stmt->bindParam(":proceeds_usd", $this->proceeds_usd);
$stmt->bindParam(":revenue_vnd", $this->revenue_vnd	);
$stmt->bindParam(":revenue_usd", $this->revenue_usd);

$stmt->bindParam(":profit", $this->profit);
$stmt->bindParam(":partner", $this->partner);
$stmt->bindParam(":seller", $this->seller);
$stmt->bindParam(":note", $this->note);
$stmt->bindParam(":user_id", $this->user_id);
$stmt->bindParam(":arrival_place_id", $this->arrival_place_id);
$stmt->bindParam(":departure_place_id", $this->departure_place_id);
$stmt->bindParam(":NCC_id", $this->NCC_id);
$stmt->bindParam(":partner_id", $this->partner_id);
$stmt->bindParam(":type_of_car_id", $this->type_of_car_id);
//var_dump($stmt);die;
// execute query
//var_dump($stmt);die;
if($stmt->execute()){
    return true;
}
return false;
}
}