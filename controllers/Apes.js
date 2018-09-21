'use strict'

const _ = require( 'lodash' )
const utils = require( '../utils/writer.js' )
const Apes = require( '../service/ApesService' )

module.exports.get = ( req, res, next ) => {

    if( req.swagger.useStubs ) {
        utils.writeJson( res, _.get( req, 'swagger.operation.responses.200.examples.application/json' ) )
        return
    }

    Apes.get()
        .then( response => {
            utils.writeJson( res, response )
        } )
        .catch( response => {
            utils.writeJson( res, response )
        } )
}
