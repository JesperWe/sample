'use strict'

const fs = require( 'fs' ),
    path = require( 'path' ),
    http = require( 'http' ),
    morgan = require( 'morgan' )

const app = require( 'connect' )()

const swaggerTools = require( 'swagger-tools' )
const jsyaml = require( 'js-yaml' )
const host = '0.0.0.0'
const port = 80

// swaggerRouter configuration
const options = {
    swaggerUi: path.join( __dirname, '/swagger.json' ),
    controllers: path.join( __dirname, './controllers' ),
    useStubs: true //process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
}

app.use( morgan( 'combined' ) )

const spec = fs.readFileSync( path.join( __dirname, 'api/swagger.yaml' ), 'utf8' )
const swaggerDoc = jsyaml.safeLoad( spec )

swaggerTools.initializeMiddleware( swaggerDoc, ( middleware ) => {

    app.use( middleware.swaggerMetadata() )
    app.use( middleware.swaggerValidator() )
    app.use( middleware.swaggerRouter( options ) )
    app.use( middleware.swaggerUi() )

    http.createServer( app ).listen( { port, host }, () => {
        console.log( 'HLL API server is listening on http://%s:%d)', host, port )
        console.log( 'Swagger-ui is available on /docs' )
    } )
} )
