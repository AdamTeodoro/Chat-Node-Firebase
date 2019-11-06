const express = require('express');

const path = require('path');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

const firebase = require('firebase');

// const firebaseJS = require('./firebase.js');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/',(req, res)=>{
    res.render('index.html');
});

    var firebaseConfig = {
        apiKey: "AIzaSyBhuhUVVdxCJrff59quSBjgGqz9WcGLIEY",
        authDomain: "projeto-php-cd350.firebaseapp.com",
        databaseURL: "https://projeto-php-cd350.firebaseio.com",
        projectId: "projeto-php-cd350",
        storageBucket: "projeto-php-cd350.appspot.com",
        messagingSenderId: "293636306647",
        appId: "1:293636306647:web:14bbd8020ebb9b70cc2292"
    };
  // Initialize Firebase
  
  
    firebase.initializeApp(firebaseConfig);
    async function buscar(){
        try{
            await firebase.firestore().collection('Mensagens').get().then((msgs)=>{
                for(let i = 0; i < msgs.docs.length; i++){
                    let msg = msgs.docs[i].data();
                    if(msg.length != ""){
                        mensagens.push(msg);
                    }
                }
            });
        }catch(error){
            console.log(error);
        }
    }
    function salvar(mensagem){
        try{
            firebase.firestore().collection('Mensagens').add(mensagem);
        }catch(error){
            console.log(error);
        }
    }

let mensagens = [];
buscar();

io.on('connection', socket=>{
    console.log(`${socket.id}`);
    socket.emit('historicoMsg', mensagens);

    socket.on('msg',(data)=>{
        console.log(data);
        salvar(data);
        mensagens.push(data);
        socket.broadcast.emit('obtevemsg', data);
    })
})
server.listen(3000);