import axios from 'axios'
// import auth from "./auth";

const instance = axios.create( {
    baseURL: 'http://localhost:2020/api/' /* Pruebas Local */
    // baseURL: 'http://m4c.sunset.com.mx:9097/api/' /* Pruebas Online */
    // baseURL: 'http://m4c.sunset.com.mx:9096/api/' /* Productivo */
} ) ;

export default instance ;
