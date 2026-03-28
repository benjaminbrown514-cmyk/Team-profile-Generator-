const Employee = require("./employee");

const question = [
    {
    type: 'input',
    message:  'please provide your Github',
    name: 'github',
    }
]

function generatePortfolio(){
        inquirer 
         .prompt(question)
         .then((answer) => { 
            retrieveAnswers(answer)
        })
    }

class Enigeer extends Employee{
    constructor(github){
        this.github = github;
    }

    getGithub(){
        generatePortfolio()

    }

    getRole(){

    }

}

//const Engineer = new Engineer();






