const mysql = require('mysql2');
const inquirer = require('inquirer');

//DATABASE CONNECTION
const connection = mysql.createConnection({
    host: 'localhost',

    //port #
    post: 3306,

    //username
    user: 'root',

    //my credentials
    password: 'Pushsoccer#94',
    database: 'employee_tracker'
});

//make connection to database to begin application
connection.connect((err) => {
    if (err) throw err;
    
    console.log("WE ARE CONNECTED!")

    //  use inquirer to ask questions about user
    inquirer
        .prompt({
            name: 'userResponse',
            type: 'list',
            message: 'What would you like to do?',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'Exit'
                ],      
        })
        .then((UserRequest) => {
            console.log (UserRequest)
        })
})

