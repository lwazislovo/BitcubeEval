import React, { useState }from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import AppliedMathsLogo from "./../images/AppliedMathsLogo.jpg";
import CardActions from "@material-ui/core/CardActions";
import grey from "@material-ui/core/colors/blueGrey";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


let useStyles = makeStyles((theme)=>{
    return (
        {
            button:{
                backgroundColor:grey[100]
            },
            course :{
                color:"blue"
            }
        }
    )
})

let Accordiona = ()=>{
    let classes = useStyles()
    return(
         <div className = {classes.display} >
            <Accordion id = "accordion" >
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon/>}
                    aria-controls = "panel1a-content"
                    id = "panel1a-header"
                    expanded = {false}
                >
                    <Typography className = {classes.course}>
                        Mathematical Modeling
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To enable students to demonstrate a basic understanding of solution, equilibrium points and stability of different equations.
                    </Typography>
                </AccordionDetails>
                

            </Accordion>
            <Accordion id = "accordion" >
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon/>}
                    aria-controls = "panel1a-content"
                    id = "panel1a-header"
                    expanded = {false}
                >
                    <Typography className = {classes.course} >
                    Differential equetions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To enable students to obtain knowledge of first-order ordinary differential equations and linear differential equations of higher order equestions
                    </Typography>
                </AccordionDetails>
                

            </Accordion>
            <Accordion id = "accordion" >
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon/>}
                    aria-controls = "panel1a-content"
                    id = "panel1a-header"
                    expanded = {false}
                >
                    <Typography className = {classes.course}>
                    Calculus
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To equip students with those basic skills in differential and integral calculus which are essential for the physical, life and economic sciences.
                    </Typography>
                </AccordionDetails>
                

            </Accordion>
            <Accordion id = "accordion" >
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon/>}
                    aria-controls = "panel1a-content"
                    id = "panel1a-header"
                    expanded = {false}
                >
                    <Typography className = {classes.course}>
                    Applied Linear Algebra
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To enable students to apply numerical solution of systems of linear equetions.
                    </Typography>
                </AccordionDetails>
                

            </Accordion>
            </div> 

    )
}


export default function AppliedMathsDegree(){
    let classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return(
        <Card >
            <CardActionArea>
                
                        <CardMedia
                            component = "img"
                            alt = "image for applied maths degree"
                            height = "140"
                            
                            image = {AppliedMathsLogo}   
                        />
                          <CardContent>
                          <Typography gutterBottom variant="h4" component="h2">
                                Bsc Applied Mathematics
                          </Typography>
                          <Typography >
                              Duration : 3 years
                          </Typography>
                          <Typography variant="body1" color="textSecondary" component="p">
                          It's the study of applications of mathematics and computational techniques to problem solving 
                          </Typography>
                        </CardContent>   
            </CardActionArea>
            <CardActions>
            <Button  onClick = {handleClick} aria-controls = "courseMenu" aria-haspopup = "true" className = {classes.button} size="medium" color="primary">
                View Courses
            </Button>
            
            <Menu 
                id = "courseMenu" 
                anchorEl = {anchorEl} 
                keepMounted open = {Boolean(anchorEl)}
                onClose = {handleClose}
            >
                <MenuItem ><Accordiona/></MenuItem>
            </Menu>
            </CardActions>
        </Card>
    )
}