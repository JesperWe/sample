'use strict'

const fs = require( 'fs' ),
    path = require( 'path' ),
    http = require( 'http' )

const app = require( 'connect' )()

const swaggerTools = require( 'swagger-tools' )
const jsyaml = require( 'js-yaml' )

const host = '0.0.0.0'
const port = 8000

const swaggerDoc = jsyaml.safeLoad(
    fs.readFileSync(
        path.join( __dirname, 'api/swagger.yaml' ), 'utf8'
    )
)

swaggerTools.initializeMiddleware( swaggerDoc, ( middleware ) => {

    app.use( middleware.swaggerMetadata() )
    app.use( middleware.swaggerValidator() )

    app.use( middleware.swaggerRouter( {
        controllers: path.join( __dirname, './controllers' ),
        useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
    } ) )

    app.use( middleware.swaggerUi() )

    http.createServer( app ).listen( { port, host }, () => {
        console.log( 'API server is listening on http://%s:%d)', host, port )
        console.log( 'Swagger-ui is available on /docs' )
    } )
} )
