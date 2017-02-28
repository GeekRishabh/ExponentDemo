
import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
const io = require('socket.io-client');

const host = 'http://10.0.1.36:3030';
const socket = io(host, { transports: ['websocket'] });
const app = feathers()
            .configure(socketio(socket));

  componentWillMount()
 {
    socket.on('getuser', () => {
        console.log('socket connected');
  });
  socket.on('eventName', (data) => {
    console.log('socket', data);
 });
}