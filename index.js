

var primus = new Primus();

primus.on('data', function(data) {
    console.log(data);
});

document.getElementById('kk').addEventListener('input', function() {
    primus.write(document.getElementById('kk').value);
});

