const mysql = require('mysql2/promise');  
require('dotenv').config();

const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: 'Lol09833@',
    database: 'SanPhamDB',
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database");
    connection.release();
});
// Khởi tạo FAISS để lưu trữ các vector embeddings

module.exports = db;