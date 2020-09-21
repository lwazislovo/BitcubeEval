import React, { useState }from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import ComputerScienceLogo from "./../images/ComputerScienceLogo.jpg";
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
            course : {
                color : "blue"
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
                        Introduction to programming
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To provide students with an introduction to programming and to cover the fundamentals of control structures and problem-solving techniques.
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
                    Theorical Computer Science
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To introduce students to some concepts from Discrete Mathematics as a theoretical foundation for Computer Science.
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
                    Computer Algebra
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To give students an understanding of the power of modern computer algebra systems.
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
                    Computer Organisation 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To introduce students to the underlying structure of a modern digital computer.
                    </Typography>
                </AccordionDetails>
                

            </Accordion>
            </div> 

    )
}


export default function ComputerScienceDegree(){
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
                            alt = "image for computer science degree"
                            height = "140"
                            
                            image = {ComputerScienceLogo}   
                        />
                          <CardContent>
                          <Typography gutterBottom variant="h4" component="h2">
                                Bsc Computer Science
                          </Typography>
                          <Typography >
                              Duration : 3 years
                          </Typography>
                          <Typography variant="body1" color="textSecondary" component="p">
                          Computer Science is the discipline of solving problems via solutions that are implemented on computers.
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