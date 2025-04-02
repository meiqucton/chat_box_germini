const mysql2 = require("mysql2");
require('dotenv').config();

const db = mysql2.createPool({
    host: 'localhost',
    user:  'root',
    password: 'Lol09833@',
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database");
    connection.release();
});
module.exports = db;