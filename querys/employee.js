const mysql = require('mysql2')
const cTable = require ('console.table')
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'management_db'
    },
    console.log(`Connected to the management_db database.`)
  );

async function displayEmployees() {
    db.query("SELECT * FROM employee", (err, results) => {
        console.table(results)
        init()
    })
}


module.exports = displayEmployees