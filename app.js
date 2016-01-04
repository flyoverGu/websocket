'use strict';

require("http").globalAgent.maxSockets = Infinity;
let io = require('socket.io')(process.env.PORT || 9001);
let redis = require('socket.io-redis');

io.adapter(redis({
    host: 'localhost',
    port: 6379
}));

let count = 0;
io.on('connection', (socket) => {
    count++;
    console.log('connect!! id: ' + socket.id + ' count ' + count);

    socket.on('msg', (msg) => {
        console.log('accept::', msg);
        socket.emit('return', {
            data: 'get some thing'
        });
    });

    socket.on('disconnect', (err) => {
        count--;
        console.log(err + '  disconnect count ', count);
    });

    //setInterval(function() {
    //    socket.emit('heart', 'r');
    //}, 15000);

});
console.log('start!!');
