'use strict'
const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port',port);

const server = http.createServer(app);

server.listen(port);
server.on('error', oneError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

function normalizePort(val) {
    const port = parseInt(val,10);
    if(isNaN(port)){
        returnval;
    }

    if (port >=0) {
        return port;
    }
    return false;
}

function oneError(error) {
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
     'pipe ' + port :
     'port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(binb + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADORINUSE':
            console.error(binb + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    debug('listening on ' + bind);
}