import React from "react";
import blue from "@material-ui/core/colors/blue"

class Home extends React.Component{
    render(){
        return(
            <div>
            <h2 style = {{backgroundColor : blue[500]}}>Welcome to campus management system, please use the navigation bar on the top to perform tasks.</h2>
            <ul>
                <li>
                     <h3> I.  Click on "Degrees" on the navigation bar to view all the degrees you are responsible for.</h3>

                </li>
                <li>
                     <h3> II.   Click on "Students" on the navigation bar to view all the students you are managing.</h3>

                </li>
                <li>
                     <h3> III.  Click on "ADD STUDENT" on the navigation bar to add a new student to the list.</h3>

                </li>
              

                
            </ul>
            </div>
        )
    }
}

export default Home;