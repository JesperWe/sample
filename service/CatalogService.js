'use strict'

exports.catalogGroupsGET = ( examples ) => {
    return new Promise( ( resolve, reject ) => {
        if( Object.keys( examples ).length > 0 ) {
            resolve( examples[ Object.keys( examples )[ 0 ] ] )
        } else {
            resolve()
        }
    } )
}
