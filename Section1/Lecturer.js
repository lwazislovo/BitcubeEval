let { Details } = require("./Details");

class Lecturer extends Details{
    constructor(Forenames,Surname,Email_Address,Date_of_Birth,List_of_Degrees){
        super(Forenames,Surname,Email_Address,Date_of_Birth)
        this.List_of_Degrees = List_of_Degrees.split(",");
    }
//the display method displays the lecture details on the console
    display(){
        console.log(this)
    }
}

