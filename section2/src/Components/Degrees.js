import React from "react";
import MathsDegree from "./MathsDegree";
import AccountingDegree from "./AccountingDegree";
import ComputerScienceDegree from "./ComputerScience";
import AppliedMathsDegree from "./AppliedMathsDegree";
import ElectricalEngineering from "./ElectricalEngineering";
import MechanicalEngineering from "./Mechanical";
import Grid from "@material-ui/core/Grid";


function Degrees(){
    

    return(
            <div>
                <Grid container justify = "center" spacing = {3}>
                    <Grid item xs = {5}>
                        <AccountingDegree/>
                    </Grid>
                    <Grid item xs = {5}>
                        <AppliedMathsDegree/>
                    </Grid>
                    <Grid item xs = {5}>
                        <ComputerScienceDegree/>
                    </Grid>
                    <Grid item xs = {5}>
                        <ElectricalEngineering/>
                    </Grid> 
                    <Grid item xs = {5}>
                        <MathsDegree/>
                    </Grid>
                    <Grid item xs = {5}>
                        <MechanicalEngineering/>
                    </Grid>
                </Grid>
            </div>
        )
    
}

export default Degrees;