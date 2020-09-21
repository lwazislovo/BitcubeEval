import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import blue from "@material-ui/core/colors/blue"


class FormStudentDetails extends React.Component{


    Continue = (e)=>{
        e.preventDefault();
        this.props.nextStep()
    }
    validation = () => {
        return "error"
    }
    render(){
        const { values , handleChange, Validate } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <h1 style = {{backgroundColor:blue[500]}}>Please fill the form below to add a student.</h1>
                    <TextField 
                    
                        

                        label = "Enter Firstname"
                        floatingLabelText = "Firstname"
                        onChange = {handleChange("Firstname")}
                        required
                        variant= "outlined"
                        margin = "normal"
                        helperText = { this.props.values.Firstname.length === 0 ? "thee field is required":"" }
                        error = { !this.props.values.Firstname ? Boolean(true): Boolean(false)}
                    />
                    <br/>
                    <TextField 
                        label = "Enter Surname"
                        floatingLabelText = "Surname"
                        onChange = {handleChange("Surname")}
                        defaultValue = {values.Surname}
                        required
                        variant= "outlined"
                        margin = "normal"
                        helperText = { this.props.values.Surname.length === 0 ? "the field is required" : ""}
                        error = { !this.props.values.Surname ? Boolean(true): Boolean(false)}
                    />
                    <br/>
                    <TextField 
                        label = "Enter Email"
                        floatingLabelText = "Email"
                        onChange = {handleChange("Email")}
                        defaultValue = {values.Email}
                        required
                        variant= "outlined"
                        margin = "normal"
        
                        helperText = {/@/.test(this.props.values.Email)? "email is valid" :"field required"}
                        error = { !this.props.values.Email ? Boolean(true): Boolean(false)}
                    />
                    <br/>
                    <TextField 
                        //label = "Enter Date Of birth"
                        floatingLabelText = "Date of Birth"
                        onChange = {handleChange("DateOfbirth")}
                        defaultValue = {values.DateOfbirth}
                        required
                        type = "date"
                        variant= "outlined"
                        margin = "normal"
                        helperText = { !this.props.values.DateOfbirth ? "the field is required" : ""}
                        error = { !this.props.values.DateOfbirth ? Boolean(true): Boolean(false)}
                        
                    />
                    <br/>
                    <TextField 
                        label = "Enter Degree"
                        floatingLabelText = "Degree"
                        onChange = {handleChange("Degree")}
                        defaultValue = {values.Degree}
                        required
                        variant= "outlined"
                        margin = "normal"
                        helperText = { !this.props.values.Degree ? "This field is required": ""}
                        error = { !this.props.values.Degree ? Boolean(true): Boolean(false)}
                        
                    />
                    <br/>
                    <br></br>
                    <Button onClick = {this.Continue} style = {styles.button}>Continue</Button>

                    
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button : {
        backgroundColor : blue[500]
    },
    heading:{
        backgroundColor:blue[500]
    },
    TextField : {
        color:"yellow"
    }
}



export default FormStudentDetails;