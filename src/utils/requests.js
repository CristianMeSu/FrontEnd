'use strict'

const Requests = {} ;
const axios = require( 'axios' ) ;

// BackEnd Endpoints URL
const base_url = "http://localhost:2020/api/" ; // pruebas en mi equipo
// const base_url = "http://192.168.52.218:2020/api/" ; // pruebas remotas Ethernet
// const base_url = "http://192.168.52.59:2020/api/" ; // pruebas remotas WiFi

const headers = {
    headers: {
        'Authorization': `Bearer ${ localStorage.getItem('accessToken' ) }`,
        'WWW-Authenticate': `Basic ${ localStorage.getItem('accessToken' ) }.fm483fj98f3lfir793dfu98itoqkp5t8`,
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

Requests.get = function( url = '', params = {} ) {
    return axios.get(
            base_url + url
            , headers
            , params
        ).then(
            function ( response) {
                return response
            }
        )

        .catch(
            function ( error ) {
                return error
            }
        )
};

Requests.post = function( url ='', dataSend = {}, dataHeaders = {} ) {
    if ( Object.keys( dataHeaders ).length === 0 ) {
        dataHeaders = headers
    }

    // console.log( base_url + url , dataSend , dataHeaders ) ;

    return axios
        .post(
            base_url + url,
            dataSend,
            dataHeaders
        )
        .then(
            function (response) {
                // console.log( "then: " , response )
                return response
            }
        )

        .catch(
            function ( error ) {
                // console.log( "error.response: " , error.response ) ;

                return error.response ;
            }
        )
} ;

Requests.put = function( url ='', dataSend = {}, dataHeaders = {} ) {
    if ( Object.keys( dataHeaders ).length === 0 ) {
        dataHeaders = headers
    }

    return axios
        .put(
            base_url+url
            , dataSend
            , dataHeaders
        )

        .then(
            function ( response) {
                return response
            }
        )

        .catch(
            function ( error ) {
                return error
            }
        )
};

Requests.delete = function( url ='', dataHeaders = {} ) {
    if ( Object.keys( dataHeaders ).length === 0 ) {
        dataHeaders = headers
    }

    return axios
        .delete(
            base_url+url
            , dataHeaders
        )

        .catch(
            function ( error ) {
                return error
            }
        )
} ;

module.exports = Requests ;
