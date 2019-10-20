import axios from "axios";
import Auth from "../../../components/AuthService";
import {API_URL} from "../../../config/config";
import base64 from "base-64";
export function DepartureDel(props){

    console.log('dele',props);
    
    const auth = new Auth()
    let token = auth.getToken()
    console.log('token',token)
    try {
        let decoded = JSON.parse(base64.decode(auth.getToken()))
        console.log('tokend',decoded)
        if(decoded.department== '1'){
            axios.post(API_URL+'/production/departure/delDeparture.php',{
                token:token,
                id:props
            }).then(res=>{
                console.log(res)
            })
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
    
    
}