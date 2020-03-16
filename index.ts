import Server from './classes/server';
import { Router } from 'express';
//import { SERVER_PORT } from './global/environment';
import { router } from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server(); 

//BodyParser
server.app.use( bodyParser.urlencoded({ extended: true}));
server.app.use( bodyParser.json() );

//CORS
server.app.use( cors({ origin: true, credentials: true }) );


//rutas de servicios
server.app.use('/', router );

server.start( () => {
    //console.log(`Servidor corriendo en puerto ${ SERVER_PORT}`);
    console.log(`Servidor corriendo en puerto ${ server.port }`);
});
 