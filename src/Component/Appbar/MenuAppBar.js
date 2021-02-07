import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "./MenuAppBar.css";
import Products from "./Products/Products";

var useStyles = makeStyles(() => ({
  header: {
    color: "#242438",
    backgroundColor: "#ecf3f7",
    // setcompo ? (backgroundColor:"white") :(backgroundColor: "#ecf3f7"),
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
  const [compo, setcompo] = useState(null);
  const [compoto, setcompoto] = useState(false);

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
  const productHandler = (event) => {
    // alert(event.target.innerText);
    setcompo(event.target.innerText);
    if (event.target.innerText === "Products" || "Solutions " || "Resources") {
      useStyles = makeStyles(() => ({
        header: {
          color: "#242438",
          backgroundColor: "white",
          // setcompo ? (backgroundColor:"white") :(backgroundColor: "#ecf3f7"),
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
    }
  };
  const productmouseHandler = () => {
    // alert("mouse enter");
    setcompoto(true);
  };
  const productmousecloseHandler = () => {
    // alert("mouser leve");
    setcompoto(null);
    setcompo(null);
  };
  const productCloseHandler = () => {
    // if (compoto) {
    //   setcompo(null);
    // }
    console.log(compoto);
    useStyles = makeStyles(() => ({
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
  };

  const returnCompo = () => {
    if (compo === "Products") {
      return (
        <div
          onMouseEnter={productmouseHandler}
          onMouseLeave={productmousecloseHandler}
        >
          <Products compo={compo} />
        </div>
      );
    } else if (compo === "Solution") {
      return (
        <div
          onMouseEnter={productmouseHandler}
          onMouseLeave={productmousecloseHandler}
        >
          <Products compo={compo} />
        </div>
      );
    } else if (compo === "Resources") {
      return (
        <div
          onMouseEnter={productmouseHandler}
          onMouseLeave={productmousecloseHandler}
        >
          <Products compo={compo} />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.header}
        // onMouseLeave={productmousecloseHandler}
      >
        <Toolbar>
          <img
            src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
            className={classes.img}
            alt="menu"
          />
          <Typography
            variant="h6"
            className={classes.title + " menuToolbar product_class"}
          >
            <span
              onMouseEnter={productHandler}
              onMouseLeave={productCloseHandler}
            >
              Products
            </span>
          </Typography>
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            <span
              onMouseEnter={productHandler}
              onMouseLeave={productCloseHandler}
            >
              Pricing
            </span>
          </Typography>
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            <span
              onMouseEnter={productHandler}
              onMouseLeave={productCloseHandler}
            >
              Solution
            </span>
          </Typography>
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            <span
              onMouseEnter={productHandler}
              onMouseLeave={productCloseHandler}
            >
              Customers
            </span>
          </Typography>
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            <span
              onMouseEnter={productHandler}
              onMouseLeave={productCloseHandler}
            >
              Resources
            </span>
          </Typography>
          <Typography variant="h6" className={classes.title + " menuToolbar"}>
            <span
              onMouseEnter={productHandler}
              onMouseLeave={productCloseHandler}
            >
              <NavLink to="/send-message">Send Message</NavLink>
            </span>
          </Typography>

          <Typography variant="h6" className="menuToolbar left">
            <span className="menuhover">
              <LockIcon style={{ color: "#ff7846", fontSize: "15px" }} />
              <span
                style={{
                  fontSize: "16px",
                  marginLeft: "2px",
                }}
              >
                <NavLink exact to="/login">
                  Log in
                </NavLink>
              </span>
              <span className="overall">
                <span className="teer">-</span>
                <span className="teer">-</span>
                {/* <span className="teer">-</span> */}

                <ArrowForwardIosIcon
                  className="forward"
                  style={{ fontSize: "16px", marginRight: "20px" }}
                />
              </span>
            </span>
          </Typography>

          <button className={classes.btn + " menuToolbar btn"}>
            <span className="menuhover">
              <span
                style={{
                  fontSize: "16px",
                  marginLeft: "2px",
                }}
              >
                Schedule a Demo
              </span>
              <span className="overall">
                <span className="teer">-</span>
                <span className="teer">-</span>
                <span className="teer">-</span>

                <ArrowForwardIosIcon
                  className="forward"
                  style={{ fontSize: "16px", marginRight: "20px" }}
                />
              </span>
            </span>
          </button>

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
      {/* <Products /> */}
      {returnCompo()}
    </div>
  );
}
