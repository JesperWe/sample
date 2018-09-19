'use strict'

const _ = require( 'lodash' )
const utils = require( '../utils/writer.js' )
const Catalog = require( '../service/CatalogService' )

module.exports.catalogGroupsGET = ( req, res, next ) => {
    Catalog.catalogGroupsGET( _.get( req, 'swagger.operation.responses.200.examples' ) )
        .then( ( response ) => {
            utils.writeJson( res, response )
        } )
        .catch( ( response ) => {
            utils.writeJson( res, response )
        } )
}
