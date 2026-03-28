const Employee = require("./employee");

const question = [
    {
        type:'input',
        message: 'please provide your school',
        name: 'school',
    },

]

 function generatePortfolio(){
        inquirer 
         .prompt(question)
         .then((answer) => { 
            retrieveAnswers(answer)
        })
    }

class Intern extends Employee{
    constructor(school){
        this.school = school;

    }

    getSchool(){
        generatePortfolio()

    }

    getRole(){

    }


}

//const Intern = new Intern(); 