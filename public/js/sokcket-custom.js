var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});
// escuchar
socket.on('disconnect', function() {
    //  alert('lost connecion')
    console.log('perdimos conexion ala base de datos');
});

//emitir
socket.emit('enviarMensage', {
        usuario: 'Miguel',
        mesaje: 'Hola Mundo'
    }, function(resp) {
        console.log('reapuesta del servidor', resp);


    })
    //escuchar informacion
socket.on('enviarMensage', function(mensaje) {
    console.log('servidor', mensaje);
});