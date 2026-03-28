
const inquirer = require('inquirer'); 


const question = [
        {
        type:'input',
        message: 'please provide your name', 
        name: 'name',

        },

    ]

const question1 = [
    {
        type:'input',
        message: 'please provide your id',
        name: 'id',
    },

]

const question2 = [
    {
        type: 'input',
        message: 'please provide your email',
        name: 'email',
    },
]


    function generatePortfolio(){
        inquirer 
         .prompt(question)
         .then((answer) => { 
            retrieveAnswers(answer)
        })
    }
    
    function generatePortfolio1(){
        inquirer 
         .prompt(question1)
         .then((answer) => { 
            retrieveAnswers(answer)
        })
    }

    function generatePortfolio2(){
        inquirer 
         .prompt(question2)
         .then((answer) => { 
            retrieveAnswers(answer)
        })
    }

    


    
    


    


    
    


    



class Employee{
    constructor(name, id, email,){
        this.name = name;
        this.id = id;
        this.email = email; 

    }

    getName() {
        generatePortfolio()

}

    getId(){
        generatePortfolio1()
    }

    getEmail(){
        generatePortfolio2()

    }

    getRole(){

    }
}
//const employee = new Employee();

//employee.getName();
//employee.getID();
//employee.getEmail();





//module.exports = Employee; 