import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LockIcon from "@material-ui/icons/Lock";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "./MenuAppBar.css";

const useStyles = makeStyles(() => ({
  header: {
    color: "#242438",
    backgroundColor: "#ecf3f7",
  },
  img: {
    marginLeft: "18px",
    width: "110px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "550",
    marginRight: "1px",
    marginLeft: "40px",
    cursor: "pointer",
  },
  btn: {
    backgroundColor: "#ff7846",
    color: "white",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <img
            src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
            className={classes.img}
          />
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            Products
          </Typography>
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            Pricing
          </Typography>
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            Solution
          </Typography>
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            Customers
          </Typography>
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            Resources
          </Typography>

          <Typography variant="h6" className="menuToolbar left">
            <LockIcon style={{ color: "#ff7846", fontSize: "20px" }} />
            LogIn
            <ArrowForwardIosIcon style={{ fontSize: "16px" }} />
          </Typography>

          <Button variant="contained" className={classes.btn + " menuToolbar"}>
            Schedule a Demo <ArrowForwardIcon style={{ fontSize: "16px" }} />
          </Button>

          <div>
            <IconButton
              edge="start"
              className={"menuButton"}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
