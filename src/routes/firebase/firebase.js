const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBhuhUVVdxCJrff59quSBjgGqz9WcGLIEY",
    authDomain: "projeto-php-cd350.firebaseapp.com",
    databaseURL: "https://projeto-php-cd350.firebaseio.com",
    projectId: "projeto-php-cd350",
    storageBucket: "projeto-php-cd350.appspot.com",
    messagingSenderId: "293636306647",
    appId: "1:293636306647:web:14bbd8020ebb9b70cc2292"
};

firebase.initializeApp(firebaseConfig);

module.exports.login = ( email, senha)=>{
    return firebase.auth().signInWithEmailAndPassword(email, senha).then((user)=>{
        return JSON.stringify(user);
    });
};

return module.exports;