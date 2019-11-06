// //INICIANDO Servidor
// 'use strict'

// const app = require('./src/app');

// const express = require('express');
// const http = require('http');
// const debug = require('debug')('nodestr:server');


// const porta = encontraPorta(process.env.PORT || '8081');

// app.set('port', porta);

// const server = http.createServer(app);

// server.listen(porta);
// server.on('error', onError);
// server.on('', onListening);

// console.log("Rodando na porta  8081");

// function onError(){
//     switch(error.code){
//         case 'EACCES':
//             console.error(bind + 'Problemas com  as permissões!!');
//             process.exit(1);
//         break;
//         case 'EADDRINUSE':
//             console.error(bind + 'Já está em uso!!');
//             process.exit(1);
//         break;
//         default:
//             throw error;
//     }
// }
// function encontraPorta(valor){
//     const porta = parseInt(valor,10);

//     if(isNaN(porta)){
//         return valor;
//     }

//     if(porta >=0){
//         return porta;
//     }

//     return false;

// }
// function onListening(){
//     const addr =  server.address();
//     const bind = typeof addr === 'string'
//     ? 'pipe ' + addr
//     : 'port ' + addr.port;
//     debug('Listening on ' + bind);
// }