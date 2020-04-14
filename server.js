var http = require('http');
var debug = require('debug')('lowesbackend:server');
var app = require('./app.js')
var mongoose = require('mongoose')
import loaders from './loaders'

const port = process.env.PORT || 5000;
app.set('port', port);
var server = http.createServer(app);

/**
 * Initalizing http server to listen to requests
 * Listen on provided port, on all network interfaces.
 */
async function startServer(){
    await loaders({ expressApp:app })
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
          console.log("Mongoose default connection is disconnected due to application termination");
           process.exit(0);
          });
    });
}


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

startServer()