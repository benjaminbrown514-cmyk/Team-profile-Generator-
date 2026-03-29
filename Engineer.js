//const Employee = require('./employee');

const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Please provide name of your GitHub username:',
        name: 'repo',
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






//class Engineer extends Employee{
    //constructor(github){
        //this.github = github;
    //}

    //getGithub(){
        

    //}

    //getRole(){

    //}

//}



//const Engineer = new Engineer();






