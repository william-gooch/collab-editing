const io = require('socket.io')(3000, { origins: '*:*'});

io.on('connection', client => {
  console.log('a user connected');
  client.on('disconnect', () => {
    console.log('    a user disconnected');
  });

  client.on('action', (action) => {
    if(action.type == "editing/setText") {
      console.log(action.payload);
      client.broadcast.emit('action', { type: 'editing/updateText', payload: action.payload });
    }
  });
});
