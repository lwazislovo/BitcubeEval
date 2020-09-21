import React from "react";
import Button from "@material-ui/core/Button";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/blueGrey";
import List from "@material-ui/core/List";
import  ListItem  from "@material-ui/core/ListItem";

class ConfirmStudentDetails extends React.Component{
    Continue = (e)=>{
        e.preventDefault();
        this.props.nextStep()
    }
    Back = (e)=>{
        e.preventDefault()
        this.props.prevStep()
    }
    render(){
        const { values : {Firstname,Surname,Email,DateOfbirth,Degree}} = this.props; 
            return(
                <React.Fragment>
                    <h1 style = {{backgroundColor :blue[300]}}>Confirm student details below.</h1>
                    <ul>
                        <li>
                            <h2>Firstname : {Firstname}</h2>
                        </li>
                        <li>
                            <h2>Surname: {Surname}</h2>
                        </li>
                        <li>
                            <h2>Email : {Email}</h2>
                        </li>
                        <li>
                            <h2>Date Of Birth: {DateOfbirth}</h2>
                        </li>
                        <li>
                            <h2>Degree : {Degree}</h2>
                        </li>
                    </ul>
                   
                    <Button style = {classes.back} onClick = {this.Back}>BACK</Button> 
                    <Button style = {classes.next} onClick = {this.props.nextStep}>ADD</Button>

                </React.Fragment>
                
             
            
            
            )
            
        
    }
}

const classes = {
    next : {
        backgroundColor : blue[400],
        
    },
    back : {
        backgroundColor : "grey",
        margin : "5px"
    },
    
}

export default ConfirmStudentDetails;