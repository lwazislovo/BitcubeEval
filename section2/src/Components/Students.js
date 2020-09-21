import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import StudentIcon from "./../images/icon.png";
import makeStyles from "@material-ui/core/styles/makeStyles";


let useStyles = makeStyles((theme)=>{
    return(
        {
            degree :{
                color:"blue"
            }
        }
    )
})



function Students(){
    const classes = useStyles()
    const StudentList = [
        {
            FullName : "Lwazi Mtshali",
            Email : "lwazi@gmail.com",
            DateOfBirth : "12/02/1994",
            Degree : "Computer Science"
        },
        {
            FullName : "Kervin Hart",
            Email : "kevin@gmail.com",
            DateOfBirth : "12/12/1984",
            Degree : "Accounting Science"
        },
        {
            FullName : "Wayne Diesel",
            Email : "Wayne@gmail.com",
            DateOfBirth : "3/02/1974",
            Degree : "Mathematics"
        },
        {
            FullName : "Jeanclaude Vandam",
            Email : "jean@gmail.com",
            DateOfBirth : "30/04/1964",
            Degree : "Mechanical Engineering"
        },
        {
            FullName : "trecoh Noah",
            Email : "trevoh@gmail.com",
            DateOfBirth : "26/1/1984",
            Degree : "Applied Mathematics"
        },
        {
            FullName : "Beyonce Knowles",
            Email : "beyonce@gmail.com",
            DateOfBirth : "11/10/1980",
            Degree : "Electrical Engineering"
        },
        {
            FullName : "Syanda Maphumulo",
            Email : "syanda@gmail.com",
            DateOfBirth : "11/04/1980",
            Degree : "Electrical Engineering"
        },
        {
            FullName : "Skhumba Hlophe",
            Email : "skhumba@gmail.com",
            DateOfBirth : "13/06/1980",
            Degree : "Mechanical Engineering"
        },
        
    ]
     
     return(
         <div>
             
         <Grid container justify = "center" spacing = {3}>
             
                {StudentList.map((student)=>{
                    return (
                    <Grid item xs = {3}>
                    <Card >
                    <CardActionArea>
                        <CardMedia
                            component = "img"
                            alt = "image for electrical engineering degree"
                            height = "170"
                            
                            image = {StudentIcon}   
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                                <div>
                                    Full Name : {student.FullName}
                                </div>
                                <div>
                                    Email : {student.Email}  
                                </div>
                                <div>
                                    Date Of Birth : {student.DateOfBirth} 
                                </div>
                                <div>
                    Degree : <span className = {classes.degree}>{student.Degree}</span>
                                </div>
                        </Typography>
                        </CardContent>   
                    </CardActionArea>
            
                    </Card>
                </Grid>
            )
            
        })
        }          
    </Grid>
    </div>
    
     )
        
}





export default Students;