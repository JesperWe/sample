'use strict'

const http = require( 'axios' )

exports.get = ( email ) => {
    console.log('Real resolver!')
    if( email ) {
        return http.get( 'https://jsonplaceholder.typicode.com/users/1' )
    }
    return http.get( 'https://jsonplaceholder.typicode.com/users' )
}
