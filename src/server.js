const express = require('express')
const app = express()
const port = 3000
const mySQL = require('./config/dbSQL.js')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/check-db', (req, res) => {
  mySQL.getConnection((err, connection) => {
      if (err) {
          console.error('Error connecting to the database:', err);
          return res.status(500).send('Database error');
      }
      res.send('Connected to the database');
      connection.release(); 
  });
});app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})