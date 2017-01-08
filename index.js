
var socket = io.connect('http://localhost:3000');
socket.on('text', function (data) {
    console.log(data);
});

var input = document.getElementsByTagName('input')[0]

input.addEventListener('input', emitText);

function emitText(e) {
    socket.emit('text', e.target.value);
}
