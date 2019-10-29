import base64 from 'base-64';
import jwt from 'jwt-decode';
import axios from "axios";
import Cookies from 'universal-cookie';
import { cookie_time } from "../config/config";
const cookie =  new Cookies()
//import request from "request";
export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://car-booking.com' // API server domain
        //this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.setToken = this.setToken.bind(this)
        
    }

    login(username, password) {
        console.log('login')
        // Get a token from api server using the fetch api
        return this.fetch(username, password).then(res => {
            console.log('res',res)
            this.setToken(res.data[0]) // Setting the token in localStorage
            return Promise.resolve(res);
        }).catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
        
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        //console.log(decode())
        try {
            if(token != ''){
                const decoded = base64.decode(token);
                const token_decoded = jwt(JSON.parse(decoded).token) 
                if (token_decoded.exp > 1000) { // Checking if token is expired. N
                    return true;
                }
                else
                    return false;
            }else
                return false;
        }
        catch (err) {
            console.log(err)
            return false;
        }
    }

    setToken(idToken) {

        cookie.set('token', idToken, {maxAge :cookie_time});
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        let token = localStorage.getItem('id_token')
        if(token == null)
        
            return ''
        return token    
    }
    getCookie() {
        // Retrieves the user token from localStorage
        let token = cookie.get('token')
        if(token == null){
            this.logout()
            return false
        }
            
        return true    
    }
    logout() {
        // Clear user token and profile data from localStorage
        cookie.remove('token');
        localStorage.removeItem('id_token');
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return base64.decode(this.getToken())
    }


    fetch(username,password) {
        console.log('fetch')
        return axios.post(`${this.domain}/production/login.php`,{
            username: username,
            password: password,
        })
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}