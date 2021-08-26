const client = require('./database');

client.connect();

client.query(`select * from employees`, (err, result) => {
    if(!err) {
        console.log(result.rows);
    }
    client.end();
})