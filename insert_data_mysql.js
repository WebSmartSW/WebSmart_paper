var mysql = require('mysql')

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'P1'
});

conn.connect();
var insert_data = 'INSERT INTO topic (title, leader, description, ...) VALUES("?", "?", "?")';

//var params = "웹페이지에서 받아오는 부분" 
conn.query(insert_data, function(err, rows, field){

    if(err){
        console.log(err);
    }
    else{        
        console.log(rows.insertId);
        // console.log('fields', fields);
    }

})