import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {ROUTERS} from "../../../config";
import {Link} from 'react-router-dom';

export const IcoBasket = () => {
  return (
    <IconButton aria-label="cart" color="inherit">
        <Link to={ROUTERS.basket}>
          <ShoppingCartIcon style={{color: "white"}}/>
        </Link>
    </IconButton>
  )
}
