'use strict'

const _ = require( 'lodash' )
const utils = require( '../utils/writer.js' )
const ApesResolver = require( '../resolvers/ApesResolver' )

module.exports.get = ( req, res, next ) => {

    if( req.swagger.useStubs ) {
        utils.writeJson( res, _.get( req, 'swagger.operation.responses.200.examples.application/json' ) )
        return
    }

    let email = _.get( req, 'swagger.params.email.value' )

    ApesResolver.get( email )
        .then( response => {
            utils.writeJson( res, response.data )
        } )
        .catch( error => {
            utils.writeJson( res, error.message )
        } )
}
