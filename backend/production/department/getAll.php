<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// database connection will be here
// include database and object files
include_once '../../database.php';
include_once './departmentModel.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$Department = new Department($db);

// query products
$stmt = $Department->getAll();
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){
    
    // products array
    $departments_arr=array();
    $departments_arr["records"]=array();
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){ 
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
        $Department_item = array(
            "id" => $id,
            "name" => $name,
            "description" => $description,
            "date_create" => $date_create
        );
        array_push($departments_arr["records"], $Department_item);
    }
    // set response code - 200 OK
    http_response_code(200);
    // show products data in json format
    echo json_encode($departments_arr["records"]);
}
 
// no products found will be here