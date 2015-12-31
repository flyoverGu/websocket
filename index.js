var start = function() {
    var socket = io('http://socket.test:8083');

    socket.on('return', function(data) {
        console.log(data);
    });

    var meitMsg = function(val) {
        socket.emit('msg', {
            data: val
        });
    };

    socket.on('heart', function(data) {
        console.log(data);
    });


    //document.getElementById('kk').addEventListener('input', function() {
    //    meitMsg(document.getElementById('kk').value);
    //});

}

start();
