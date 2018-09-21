'use strict'

const _ = require( 'lodash' )
const utils = require( '../utils/writer.js' )
const Catalog = require( '../service/CatalogService' )

module.exports.catalogGroupsGET = ( req, res, next ) => {

    if( req.swagger.useStubs ) {
        utils.writeJson( res, _.get( req, 'swagger.operation.responses.200.examples.application/json' ) )
        return
    }

    Catalog.catalogGroupsGET()
        .then( response => {
            utils.writeJson( res, response )
        } )
        .catch( response => {
            utils.writeJson( res, response )
        } )
}

module.exports.catalogGroupsCodeGET = ( req, res, next ) => {

    if( req.swagger.useStubs ) {
        utils.writeJson( res, _.get( req, 'swagger.operation.responses.200.examples.application/json' ) )
        return
    }

    Catalog.catalogGroupsCodeGET()
        .then( response => {
            utils.writeJson( res, response )
        } )
        .catch( response => {
            utils.writeJson( res, response )
        } )
}

module.exports.catalogProductsGET = ( req, res, next ) => {

    if( req.swagger.useStubs ) {
        utils.writeJson( res, _.get( req, 'swagger.operation.responses.200.examples.application/json' ) )
        return
    }

    Catalog.catalogProductsGET()
        .then( response => {
            utils.writeJson( res, response )
        } )
        .catch( response => {
            utils.writeJson( res, response )
        } )
}

module.exports.catalogProductsNumberGET = ( req, res, next ) => {

    if( req.swagger.useStubs ) {
        utils.writeJson( res, _.get( req, 'swagger.operation.responses.200.examples.application/json' ) )
        return
    }

    Catalog.catalogProductsNumberGET()
        .then( response => {
            utils.writeJson( res, response )
        } )
        .catch( response => {
            utils.writeJson( res, response )
        } )
}
