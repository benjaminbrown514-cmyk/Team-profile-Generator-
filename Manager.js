//const Employee = require("./employee");

const inquirer = require('inquirer');

const question = [
    {
        type: 'input',
        message: 'please provide your office number:',
        name: 'office number',
    }
]

function generatePortfolio(){
        inquirer 
         .prompt(question)
         .then((answer) => { 
            retrieveAnswers(answer)
        })
    }

    generatePortfolio()
    

//class Manager extends Employee{
    //constructor(officeNumber){
            //this.officeNumber = officeNumber;
    //}

    //getRole(){

    //}

//}

//const Manager = new Manager(); 