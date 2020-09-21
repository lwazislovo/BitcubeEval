import React from "react";
import { BrowserRouter,Link, Route, Switch } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBox from "@material-ui/icons/AccountBox";
import Toolbar from "@material-ui/core/Toolbar";
import { AppBar } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Degrees from "./Degrees";
import Home from "./Home";
import Students from "./Students";
import AddStudent from "./AddStudentForm";
import "./styles.css";
import { makeStyles }  from "@material-ui/core/styles";



function NavBar(){
    const useStyles = makeStyles(()=>{
        return ({
            Link:{
                textDecoration : "none",
                margin : "10px",
                color:"black",
                fontSize:"30px",
                
            },
            
        })
    })

    let classes = useStyles()
    
        return(
            <div>
                <BrowserRouter>
                <AppBar position = "static">
                    <Toolbar>
                        <Grid justify = "space-between" container >
                            <Grid item >
                            <IconButton>
                                <MenuIcon/>
                            </IconButton>
                            </Grid>
                            <Grid item >
                            <div className = "links">
                                <Link  className = {classes.Link} to ="/" exact>HOME</Link>
                                <Link className = {classes.Link} to ="/degrees">DEGREES</Link>
                                <Link className = {classes.Link} to ="/students">STUDENTS</Link>
                                <Link className = {classes.Link} to ="/addstudent">ADD STUDENT</Link>
                            </div>
                            </Grid>
                            <Grid item >
                            <IconButton className = {classes.root} >
                                <AccountBox /> 
                            </IconButton>
                            </Grid>
                            
                        </Grid>
                    </Toolbar>
                </AppBar>
                <br></br>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/degrees">
                        <Degrees />
                    </Route>
                    <Route path="/students">
                        <Students />
                    </Route>
                    <Route path="/addstudent">
                        <AddStudent />
                    </Route>
                </Switch>

                </BrowserRouter>         
            </div>
        )  
    
    
}

export default NavBar;
