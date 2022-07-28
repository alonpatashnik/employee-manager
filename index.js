const inquirer = require("inquirer");
require("console.table");
const db = require("./db");

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: `What would you like to do?`,
        name: "loop",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update a role",
          "Quit",
        ],
      },
    ])
    .then((res) => {
      switch (res.loop) {
        case "View all departments":
          viewAllDepartments()
          break;
        case "View all roles":
          viewAllRoles()
          break;
        case "View all employees":
          viewAllEmployees()
          break;
        case "Add a department":
          addDepartment();
          init();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update a role":
          updateRole();
          break;
        default:
          process.exit()
      }
    });
}

function viewAllDepartments() {
  db.displayDepartments()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => init());
}

function viewAllRoles(){
  db.displayRoles().then(([data]) => {
    console.table(data);
  })
  .then(() => init());
}

function viewAllEmployees(){
  db.displayEmployees().then(([data]) => {
    console.table(data);
  })
  .then(() => init())
}


function addRole(){
  db.displayDepartments().then(([data])=>{
    const departmentChoices = data.map(({id, name})=>({
      name: name, 
      value: id
    }));

    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the new role?',
        name: 'title'
      }, 
      {
        type:'input',
        message: 'what is the salary of the new role?',
        name: 'salary'
      }, 
      {
        type: 'list', 
        message: 'what department does the new role belong to?',
        name: 'department_id',
        choices: departmentChoices
      }
    ]).then((res)=> {
     db.insertRole(res)
    }).then(()=> init())


  })
}
init();
