const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado'.bgGreen);

    client.emit('enviarMensage', {
        usuario: 'admin',
        mensaje: 'Bienbenido cliente'
    })


    client.on('disconnect', () => {
        console.log('Usuario salio de la aplicacion'.bgYellow);
    });

    //escuchar el cliente
    client.on('enviarMensage', (data, callback) => {
        console.log(data);


        client.broadcast.emit('enviarMensage', data)
            // if (mensaje.usuario) {
            //     callback({
            //         resp: 'TODO SALIO BIEN!'
            //     });
            // } else {

        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!'
        //     });

        // }


    })

})