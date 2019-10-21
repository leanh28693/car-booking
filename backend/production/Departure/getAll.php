<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// database connection will be here
// include database and object files
include_once '../../database.php';
include_once './DepartureModel.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$Departure = new Departure($db);

// query products
$stmt = $Departure->getAll();
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){
    
    // products array
    $Departures_arr=array();
    $Departures_arr["records"]=array();
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){ 
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
        $Departure_item = array(
            "id" => $id,
            "name" => $name,
            "description" => $description,
            "date_create" => $date_create
        );
        array_push($Departures_arr["records"], $Departure_item);
    }
    // set response code - 200 OK
    http_response_code(200);
    // show products data in json format
    echo json_encode($Departures_arr["records"]);
}
 
// no products found will be here