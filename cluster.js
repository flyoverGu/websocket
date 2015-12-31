'use strict';

let cluster = require('cluster');
let os = require('os');

let app = require('./app');

let cpus = os.cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < cpus; ++i) {
        cluster.fork();
    }
} else {
    app();
}
