import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(100),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    textSize:'20px'
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "0px solid white",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Link to='/Users'className={classes.link} >Logo</Link>
        </Typography>
          <div className={classes.navlinks}>
           
            <Link to="/Signup" className={classes.link} >
            SignUp
            </Link>
            <Link to="/Login" className={classes.link}>
            Login
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
