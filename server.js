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
    // inquirer is a library that we are using. 
    // inquirer documentation: npmjs.com/package/inquirer
    inquirer
        .prompt({
            name: 'userResponse',
            type: 'list',
            message: 'What would you like to do?',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'Add the Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
            'Exit',
            ],      
        })
        .then((userRequest) => {
            //we need .then because this is asynchronous. The program waits for the user to make a choice, THEN the program can do the next step
            //this data is an OBJECT!!!!!!!!!! tres important//
            console.log('THIS IS userRequest')
            console.log(userRequest);  // this is the OBJECT itself

            console.log('')
            console.log("THIS IS userRequest.userResponse")
            // example: {userResponse: 'View Departments'}
            console.log(userRequest.userResponse);  // this is the way to acces a VALUE in an object. You can access the VALUE through the key
            // example: 'View Departments'

            //Depending on the user's choice, we will show differnt data from the database//
            //if the user chooses viewAllDepartment,
            //then the result should be presente, if not then resuld would be different// 

            //REMEMBER: in an if statement (conditional), you are evaluating something to be TRUE or FALSE
            console.log('')
            if (userRequest.userResponse === 'View Departments') {
                // now, we make a connection to the database and get information from the database
                connection.query(
                    'SELECT * FROM departments',
                    (error, response) => {
                        // the database gives you either an error or a response
                        if (response) {
                            
                            console.log('List of departments')
                            // no loop
                            console.log(response)
                            console.log('')
                            // we have more than 1 department. So we need to loop over them
                            response.forEach((department) => console.log(department))
                            console.log(' ')
                            // make the loop look nice
                            response.forEach((department) => console.log(department.name))
                        } else {
                            //if there is an error
                            // this is called a template literal. This is a fancy way to write a variable inside a string
                            console.log(`Error!... ${error}`)
                        }
                    
                    } 
                    
                )


            } else if (userRequest.userResponse === 'View Roles') {
                console.log('THE USE CHOSE TO VIEW ROLES')
            } else if (userRequest.userResponse === 'View Employees') {
                console.log('THE USER WANTS TO VIEW ALL EMPLOYEES')
            }
               else{console.log('The user chose to exit the program')}
            
        })
})



