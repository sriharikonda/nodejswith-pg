const { Client } = require ('pg');

const client = new Client ({
    host: "localhost",
    port: 5432,
    user: "postgres"
    passwd:"admin"
    databse: "empdata"
})

client.on("connect", () => {
    console.log("Database connection");
})

client.on("end", () => {
    console.log("connection end");
})

module.exports = client;