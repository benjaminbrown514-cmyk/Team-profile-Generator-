const inquirer = require("inquirer");
     const Employee = require("./Employee"); //corrected by RB
     //**added by RB */
     const Manager = require("./Manager")
     const Intern  = require("./Intern")
     const Engineer = require("./Engineer")
     const fs = require('fs');

     const fileName = './TeamPortfolio.html';

     
     var employeeList = []

     const questions1 = [
                {
                   type: 'input',
                   message: 'Please provide your name:',
                   name: 'name',
                }, 
                {
                   type: 'input',
                   message: 'Please provide your id:',
                   name: 'id',
                   
                   
                },
                {
                    type:'input',
                    message: 'Please provide your email:',
                    name: 'Email',
                }

     ]

     const questionsE = [
                {
                   type: 'input',
                   message: 'Please provide your name:',
                   name: 'name',
                }, 
                {
                   type: 'input',
                   message: 'Please provide your id:',
                   name: 'id',
                   
                   
                },
                {
                    type:'input',
                    message: 'Please provide your email:',
                    name: 'Email',
                },
                {
                    type: 'input',
                    message: 'Please provide your gitHub username:',
                    name: 'GithubUsername',
                }

     ]

     const questionsM = [
                {
                   type: 'input',
                   message: 'Please provide your name:',
                   name: 'name',
                }, 
                {
                   type: 'input',
                   message: 'Please provide your id:',
                   name: 'id',
                   
                   
                },
                {
                    type:'input',
                    message: 'Please provide your email:',
                    name: 'Email',
                },
                {
                    type: 'input',
                    message: 'Please provide your Office number:',
                    name: 'OfficeNumber',
                }

     ]

     const questionsI = [
                {
                   type: 'input',
                   message: 'Please provide your name:',
                   name: 'name',
                }, 
                {
                   type: 'input',
                   message: 'Please provide your id:',
                   name: 'id',
                   
                   
                },
                {
                    type:'input',
                    message: 'Please provide your email:',
                    name: 'Email',
                },
                {
                    type: 'input',
                    message: 'Please provide your School:',
                    name: 'School',
                }

     ]

     const questions = [ 
        {

            type: 'list',
            message: 'What would you like to do',
            name: 'response',
            choices: ['Manager', 'Engineer', 'Intern', 'finish']
        },     



]

async function generatePortfolio(){
        
           let answer = await inquirer.prompt(questions);
        
        action = answer.response;

        console.log(action)
        switch (action){
                case 'Manager':
                    ManagerInfo()
                    break
                case 'Engineer':
                    EngineerInfo()
                    break
                case 'Intern':
                    InternInfo()
                    break
                case 'finish':
                    finish()
                    break
                default: 
                    console.log('invalid statement')
                
            }

    }
    
    generatePortfolio()
    
    function ManagerInfo() { 
        inquirer 
         .prompt(questionsM)
         .then((answer) => { 
            let newObject = new Manager(answer.name, answer.id, answer.Email, answer.OfficeNumber);
            
            employeeList.push(newObject)

            generatePortfolio()
            
         })

    }



    function EngineerInfo() {
        inquirer
            .prompt(questionsE)
            .then((answer) => {
             var newObject = new Engineer(answer.name, answer.id, answer.Email, answer.GithubUsername)
             employeeList.push(newObject)
             generatePortfolio()
             
            })

    }

    function InternInfo() {
        inquirer
            .prompt(questionsI)
            .then((answer) => {
            var newObject = new Intern(answer.name, answer.id, answer.Email, answer.School)

            employeeList.push(newObject)
            
            generatePortfolio()
            
            })

    }

    function finish(){
        var htmlStart = '<!DOCTYPE html>\
<html lang="en">\
    <head> \
        <link rel = "stylesheet" href="style.css">\
    </head>\
    <body> \
        <header class = "header">My Team </header>\
        <main class = "uniformgrid">'
                
          
        var htmlEnd = '</main>\
    </body>\
    </html>'

        for (let employee in employeeList){
           console.log(employeeList[employee]) 
        var roleChange 
        switch (employeeList[employee].getRole()){
            case 'Manager':
                roleChange = 'Office Number: ' + employeeList[employee].getOfficeNumber()
                break
            case 'Engineer':
                roleChange = 'Github Username: <a href="https://github.com/' + employeeList[employee].getGithub() + '">' + employeeList[employee].getGithub() + '</a>'
                break
            case 'Intern':
                roleChange = 'School: ' + employeeList[employee].getSchool()
                break

        }
        var html = '<div class = "message"> <div> <p>'+ employeeList[employee].getName() + '</p><p>' + employeeList[employee].getRole() + '</p></div> \
        <p>ID: ' + employeeList[employee].getId() + '</p>  <p>Email: <a href="mailto:'+employeeList[employee].getEmail()+'">' + employeeList[employee].getEmail() + '</a></p> \
        <hr/>' + roleChange + '</p></div>'
        htmlStart += html
        }
        htmlStart += htmlEnd

        fs.writeFileSync(fileName, htmlStart)

        
        

    }












    

     








