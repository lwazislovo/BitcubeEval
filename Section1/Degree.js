class Degree{
    constructor(DegreeName,Duration,List_of_courses,LeacturedBy){
        this.DegreeName = DegreeName;
        this.Duration = Duration + " years";
        this.List_of_courses = List_of_courses.split(",");
        this.LeacturedBy = LeacturedBy;
    }

//display is a method that displays Degree details on the console.
    display(){
        console.log(this)
    }
}
