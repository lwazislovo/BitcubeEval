import React, { useState }from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import ElectricalLogo from "./../images/ElectricalLogo.jpeg";
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
                        Engineering Mathematics
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To introduce students to convergence of series; power series; complex analysis and differential equations 
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
                    Circuit Analysis
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Laplace transforms, analysis in complex plane, networks and systems in state space, state equations of electrical networks, differential equations, computer solutions.
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
                    Electronics
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Theory, analysis, design, simulation, prototyping, testing
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
                    Engineering Management
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Principles of general management; managing people; marketing; law of contract; project management;
                    </Typography>
                </AccordionDetails>
                

            </Accordion>
            </div> 

    )
}


export default function ElectricalEngineeringDegree(){
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
                            alt = "image for electrical engineering degree"
                            height = "140"
                            
                            image = {ElectricalLogo}   
                        />
                          <CardContent>
                          <Typography gutterBottom variant="h4" component="h2">
                                Bsc Electrical Engineering
                          </Typography>
                          <Typography >
                              Duration : 4 years
                          </Typography>
                          <Typography variant="body1" color="textSecondary" component="p">
                          Electrical engineering is the design, building and maintenance of electrical control systems, machinery and equipment.
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