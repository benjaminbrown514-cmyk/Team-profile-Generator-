//const Employee = require("./employee");

const inquirer = require('inquirer'); 

const question = [
    {
        type:'input',
        message: 'please provide your school:',
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

    generatePortfolio()
    

//class Intern extends Employee{
    //constructor(school){
        //this.school = school;

    //}

//}

    //getSchool(){
        

    //}

    //getRole(){

    //}


//}

//const Intern = new Intern(); 