const connection = require('./connection')

class Data {
    constructor(connection) {
        this.connection = connection
    }

    displayDepartments() {
       return this.connection.promise().query("SELECT * FROM department;")
    }

    displayEmployees() {
        // formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, department.name, role.title, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role  ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON manager.id = employee.manager_id;")
        
    }

    displayRoles() {
        return this.connection.promise().query("SELECT role.title, role.salary, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id;")
    }

    insertRole(title, salary, dept_id) {
        return this.connection.promise().query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [title, salary, dept_id])
    }

    insertDepartment(department) {
        return this.connection.promise().query("INSERT INTO department (name) VALUES (?)", [department])
    }

    insertEmployee(first, last, role_id, manager_id) {
        return this.connection.promise().query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [first, last, role_id, manager_id])
    }

    // getIdOfManager() {
    // //     return this.connection.promise().query("SELECT employee.id, employee.first_name, employee employee.manager_id, role.department_id FROM employee LEFT JOIN role ON employee.role_id = role.id")
    // }
    getAllRoles() {
        return this.connection.promise().query("SELECT * FROM role")
    }
}

module.exports = new Data(connection)