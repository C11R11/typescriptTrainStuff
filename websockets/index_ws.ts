import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 6789 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    ws.send('received: %s'+ data);
  });

  ws.send('something');
});