const mysql = require('mysql');
const inquirer = require('inquirer')

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
    // initialQuestions();
    console.log("dadabase connection")
})

