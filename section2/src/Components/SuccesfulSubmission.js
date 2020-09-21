import React from "react";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";

class SuccessfulSubmission extends React.Component{
    Back = (e)=>{
        e.preventDefault()
        this.props.prevStep()
    }
    render(){
        return(
            <div>
                <h2 style = {{backgroundColor:blue[400]}}>
                student added with success!
                </h2>
                <Button style = {{backgroundColor:grey[500]}} onClick = {this.Back}>
                    back
                </Button>
            </div>
            
        )
    }
}
export default SuccessfulSubmission;