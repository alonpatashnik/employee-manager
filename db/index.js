const connection = require('./connection')

class Data {
    constructor(connection){
        this.connection = connection
    }

    displayDepartments() {
       return this.connection.promise().query("SELECT * FROM department;")
    }

    displayEmployees(){
        // formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, department.name, role.title, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role  ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON manager.id = employee.manager_id;")
        
    }

    displayRoles(){
        return this.connection.promise().query("SELECT * FROM role;")
    }

    insertRole(role){
        return this.connection.promise().query("INSERT INTO role set ?", role)
    }
}

module.exports = new Data(connection)