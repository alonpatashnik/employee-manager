const inquirer = require('inquirer')
const cTable = require ('console.table')
const mysql = require('mysql2')
const displayDepartments = require('./querys/department')
const displayRoles = require('./querys/role')
const displayEmployees = require('./querys/employee')

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'management_db'
    },
    console.log(`Connected to the management_db database.`)
  );

function init() {
  inquirer.prompt([
    {
        type: 'list',
        message: `What would you like to do?`,
        name: 'loop',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update a role', 'Quit']
    }
]).then((res) => {
    switch (res.loop) {
        case 'View all departments':
            displayDepartments();
            break;
        case 'View all roles':
            displayRoles();
            init();
            break;
        case 'View all employees':
            displayEmployees();
            init();
            break;
        case 'Add a department':
            addDepartment();
            break;
        case 'Add a role':
            addRole();
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Update a role':
            updateRole();
            break;
        case 'Quit':
            break;
    
        default:
            break;
    }
})
// .then(init())
.catch((err) => console.error(err))
}

init();