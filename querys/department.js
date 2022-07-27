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

function displayDepartments() {
    console.log('hello')
    db.query("SELECT * FROM department", (err, results) => {
        console.table(results)
        init()
    })
}


module.exports = displayDepartments