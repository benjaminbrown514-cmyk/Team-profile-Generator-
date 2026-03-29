//const Employee = require("./employee");

    

     const inquirer = require("inquirer");




    const questions = [ 
        {

            type: 'input',
            message: 'Would you like to add an engineer ?',
            name: 'engineer',
            default: 'yes'
        }, 
        {

            type: 'input',
            message: 'Would you like to add an intern ?',
            name: 'intern',
            default: 'yes'
        }, 
        {

            type: 'input',
            message: 'Would you like to finish building team?',
            name: 'team',
            default: 'yes'
        }, 



]

function generatePortfolio(){
        inquirer 
         .prompt(questions)
         .then((answer) => { 
            retrieveAnswers(answer)
        })
    }
    
    generatePortfolio()
    

//class Index extends Employee

//const Index = new Index();










