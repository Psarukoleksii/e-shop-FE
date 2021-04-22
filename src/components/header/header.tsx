import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useHeaderStyles} from "../../styles";
import {Catalog, IcoBasket, IcoProfile, Language, Logo, Search} from "./sections";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

export const Header = () => {
  const classes = useHeaderStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{background: "primary"}}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Logo/>
          </Typography>
          <Catalog/>
          {/*<Search />*/}
          <div className={classes.grow}/>
          <Language/>
          <IcoBasket/>
          <IcoProfile/>
        </Toolbar>
      </AppBar>
    </div>
  );
};
