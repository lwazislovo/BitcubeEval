import React, { useState }from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import AccountingLogo from "./../images/AccountingLogo.png";
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
            course:{
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
                    <Typography className = {classes.course} >
                        Accounting Information Systems
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                    To equip students with theoretical knowledge in order to explain the nature of information systems and technology infrastructure.                   
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
                    Economics
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To gain insight into how the basic economic problem is solved in different economic systems.                 
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
                    Business Management
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To establish a foundation for the study of business management. 
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
                    Financial Accounting
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To equip students with the necessary competencies for the preparation and presentation of financial statements.                  
                    </Typography>
                </AccordionDetails>
                

            </Accordion>
            </div> 

    )
}


export default function AccountingDegree(){
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
                            alt = "image for accounting science degree"
                            height = "140"
                            
                            image = {AccountingLogo}   
                        />
                          <CardContent>
                          <Typography gutterBottom variant="h4" component="h2">
                                Bsc Accounting Science
                          </Typography>
                          <Typography >
                              Duration : 4 years
                          </Typography>
                          <Typography variant="body1" color="textSecondary" component="p">
                          The Bachelor of Accounting Science degree is required if you wish to qualify as a Chartered Accountant.
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