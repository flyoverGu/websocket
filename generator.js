module.exports = {
    onConnect: function(client, done) {
        console.log('conntent');
        client.emit('msg', 'cc');
        done();
    },
}
