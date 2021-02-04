import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../../components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.logo}>
      <Logo />
    </div>
    <nav className={classes.desktoponly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
