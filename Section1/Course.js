class Course{
    constructor(Coursename,Duration,Degree_linked_to){
        this.Coursename =  Coursename;
        this.Duration = Duration + " months";
        this.Degree_linked_to = Degree_linked_to;
    }
//display, console.logs the course details on the console
    display(){
        try{
            if(this.Degree_linked_to.split(",").length > 1){
                throw "A course can only be linked to one degree"
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
