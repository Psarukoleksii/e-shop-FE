import React, {useContext} from 'react';
import {AuthContext} from "../../../context";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";
import {ROUTERS} from "../../../config";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {useHeaderStyles} from "../../../styles";

export const IcoProfile = () => {
  const classes = useHeaderStyles();
  const {isLoginUser} = useContext(AuthContext);
  const menuId = 'primary-search-account-menu';

  return (
    <IconButton
      className={classes.icoProfile}
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      color="inherit"
    >
      <Link
        to={isLoginUser ? ROUTERS.profile : ROUTERS.authorization}>
        <AccountCircle className={classes.icon}/>
      </Link>
    </IconButton>
  )
}
