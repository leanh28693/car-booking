<?php
// required headers
header("Access-Control-Allow-Origin: *");
//header('Access-Control-Allow-Credentials: true');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");
//header("Access-Control-Max-Age: 1728000");
header("Access-Control-Allow-Headers: Content-Type");
//header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// database connection will be here
// include database and object files
include_once '../database.php';
include_once '../register.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$Register = new Register($db);

// query products
//$stmt = $Register->login();
//$num = $stmt->rowCount();

// check if more than 0 record found
//if($num>0){
    // get posted data
$data = json_decode(file_get_contents("php://input"));
// make sure data is not empty
//var_dump($data);die;
if(
    !empty($data->username)|| 
    !empty($data->password) 
){
    $user = $Register->readOne($data->username);
    //var_dump($user);die;
    if($user){
        if($user['password'] == $data->password){
            // products array
            $users_arr=array();
            $users_arr["records"]=array();
        
            //while ($row = $user->fetch(PDO::FETCH_ASSOC)){
                extract($user);
                $user_item = array(
                    "id" => $id,
                    "username" => $username,
                    "email" => $email,
                    "firstname" => $first_name,
                    "lastname" => $last_name,
                    "address" => $address,
                    "phone" => $phone,
                    "department" => $department,
                    "token" => $token
                );
                array_push($users_arr["records"], base64_encode(json_encode($user_item)));
            //}
            // set response code - 200 OK
            http_response_code(200);
            // show products data in json format
            echo json_encode($users_arr["records"]);
        }else{
                http_response_code(200);
                echo json_encode(array("message" => 'password not correct'));
        }
    }else{
        echo json_encode(array("message" => 'user not defined'));
    }
}else{
    http_response_code(404);
    echo json_encode(array("message" => 'user or pass not correct'));
}
//}
 
// no products found will be here