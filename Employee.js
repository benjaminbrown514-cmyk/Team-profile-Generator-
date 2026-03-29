
const inquirer = require('inquirer'); 
const fs = require('fs');

const fileName = 'TeamPortfolio.html'


const question = [
        {
        type:'input',
        message: 'please provide your name:', 
        name: 'name',

        },
    
        {
        type:'input',
        message: 'please provide your id:',
        name: 'id',
        }, 
        {
        type: 'input',
        message: 'please provide your email:',
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
    
    

    
    

    generatePortfolio()

    






    
    


    



class Employee {
    constructor(name, id, email,){
        this.name = name;
        this.id = id;
        this.email = email; 

    }

    //getName() {
        
        



//}

}

     //getId(){
        
     //}

    //getEmail(){
        

    //}

    //getRole(){

    //}
//}
//const employee = new Employee();

//employee.getName();

//employee.getId();




function retrieveAnswers(answers){
    
    var html =  '<!DOCTYPE html> <html lang="en"> <head> <link rel = "stylesheet" href="style.css"></head><body><header class = "header">My Team </header><main> <div id = "nameSection" id = "idSection" id = "emailSection"><div class = "message"> Name: '+ answers.name + ' <span id = "stock"></span></div><div class = "message">id: ' + answers.id + ' <span id = "stock"></div>email: ' + answers.email + ' </main></body></html>'

    fs.writeFileSync(fileName, html)

}





//employee.getID();
//employee.getEmail();





module.exports = Employee; 