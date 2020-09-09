let { Details } = require("./Details");

class Student extends Details{
    constructor(Forenames,Surname,Email_Address,Date_of_Birth,Link_to_Degree){
        super(Forenames,Surname,Email_Address,Date_of_Birth)
        this.Link_to_Degree = Link_to_Degree;
    }
// the method display, displays student details and throw an error if there is more than 1 degree link
    display(){
        try{
            if(this.Link_to_Degree.split(",").length>1){
                throw "Student can only be enrolled for one Degree"
            }
            else{
                console.log(this)
            }
        }
        catch(error){
            console.error(error)
        }
    }
}

