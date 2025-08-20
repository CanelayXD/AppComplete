const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2409',
    database: 'amodrinks'
});

db.connect(function(err){
    if(err) throw err;
    console.log('SUCCESSFUL CONNECTION');
});

module.exports = db; 