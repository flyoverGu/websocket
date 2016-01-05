'use strict';

require("http").globalAgent.maxSockets = Infinity;


let Primus = require('primus');
let http = require('http');

var server = http.createServer();
var primus = new Primus(server, {
    transformer: 'sockjs'
});

let count = 0;
primus.on('connection', (spark) => {
    count++;
    console.log('connection id:', spark.id, 'count:', count);
    spark.on('data', (data) => {
        console.log(spark.id, 'received message:', data);
        spark.write(data);
    });

    spark.on('end', () => {
        count--;
        console.log('end', count);
    });
});

server.listen(9001, () => {
    console.log('start !!');
});
