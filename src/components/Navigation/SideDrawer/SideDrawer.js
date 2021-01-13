import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const sideDrawer = (props) => {
  let attachedClasses = [classes.sidedrawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.sidedrawer, classes.open];
  }
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedClasses.join(" ")}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
