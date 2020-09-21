import React, {Component} from "react";
import FormStudentDetails from "./FormStudentDetails";
import ConfirmStudentDetails from "./ConfirmStudentDetails";
import SuccessfulSubmission from "./SuccesfulSubmission";

class AddStudent extends Component{
    state = {
        Firstname : "",
        Surname : "",
        Email : "",
        DateOfbirth : "",
        Degree : "",
        Step : 1,
        Validate : true
    }
    //Go to the next step
    nextStep = ()=>{
        let { Step } = this.state
        this.setState({Step : Step + 1})
    }

    //Go back to previous step;
    prevStep = ()=>{
        let { Step } = this.state;
        this.setState({
            Step : Step - 1
        })
    }

    //Handle for field inputs;
    handleChange = input => e =>{
        let { Validate } = this.state;
        this.setState({
            [input]: e.target.value, 
            Validate : !Validate
        })
    }

    render(){
        
        const { Step } = this.state;
        const { Firstname,Surname,Email,DateOfbirth,Degree ,Validate} = this.state;
        const values = { Firstname,Surname,Email,DateOfbirth,Degree }
        
        switch(Step){
            case 1:
                return(
                    <FormStudentDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                        Valiadate = { Validate }
                    />
                )
            case 2:
                return(
                    <ConfirmStudentDetails
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                    />
                )
            case 3 :
                return(
                    <h1>
                        <SuccessfulSubmission
                            prevStep = {this.prevStep}
                        />
                    </h1>
                )
        }
        
    }
}

export default AddStudent;
