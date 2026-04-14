class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email; 
        
        
    }

    
//corrected by RB - no space between get and Name
    getName() {
        
        return this.name



    }

    //corrected by RB - no space between get and id
    
    getId(){
        
        return this.id
     
    }
    
    
    //corrected by RB - no space between get and email
    getEmail(){

        return this.email
        

    }

//corrected by RB - no space between get and role
    getRole(){
        return 'Employee'

    }

}

//****added by RB
module.exports = Employee;
    
    
    
















module.exports = Employee; 
