//***added by RB
const Employee = require("./Employee"); //Name of file shold match - RB



    

class Manager extends Employee{
   
    //***added by RB */
    constructor(name, id, email, officeNum) {

        //superclass constructor
        super(name, id, email);

        this.officeNumber = officeNum;
    }


    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return 'Manager'

    }

}


//***added by RB
module.exports = Manager; 
