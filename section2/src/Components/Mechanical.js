import React, { useState }from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import MechanicalLogo from "./../images/MechanicalEngineeringLogo.jpg";
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
                        Fluid Mechanics
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Fluid properties; pressure in fluids; hydrostatic forces; buoyancy; hydrostatic machines; fluid flow; flow in pipes; flow measurement.
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
                        Engineering Methamatics
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Differentiation: partial differentiation, series; integration solutions of first-order differential equations
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
                    Thermodynamics
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To give a basic understanding of the laws, units, definitions and fundamentals of the behaviour of gases and vapours under variations of temperature and pressure.
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
                    Materials Strength
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To equip a student with basic technical knowledge for determining state of common engineering structures under simple and direct loading conditions.
                    </Typography>
                </AccordionDetails>
                

            </Accordion>
            </div> 

    )
}


export default function MechanicalDegree(){
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
                            alt = "image for mechanical engineer degree"
                            height = "140"
                            
                            image = {MechanicalLogo}   
                        />
                          <CardContent>
                          <Typography gutterBottom variant="h4" component="h2">
                                Bsc Mechanical Engineering
                          </Typography>
                          <Typography >
                              Duration : 4 years
                          </Typography>
                          <Typography variant="body1" color="textSecondary" component="p">
                          Mechanical Engineering applies scientific principles to design, develop, construct, install, operate, and maintain engines.                        </Typography>
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