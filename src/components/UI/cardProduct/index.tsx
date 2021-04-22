import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {CONSTANTS} from "../../../config";
import {useStylesCardProduct} from "../../../styles";
import {IProductInfo, ICardProduct} from "../../../interfaces";
import translate from "../../../i18n/translate";

export const CardProduct = ({items, handleGetIdProduct}: ICardProduct) => {

  const handleAddProductToBasket = (items:IProductInfo) => {
    const basketLocal = JSON.parse(localStorage.getItem(CONSTANTS.product.basket) as string) || [];
    basketLocal.push(items);
    localStorage.setItem(CONSTANTS.product.basket, JSON.stringify(basketLocal));
  }

  const classes = useStylesCardProduct();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={items.image}
          title={items.name}
          onClick={() => handleGetIdProduct(items._id)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {items.name}
          </Typography>
          <Typography variant="caption" display="block">
            {items.price} $ / {items.mass} {items.weight}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleGetIdProduct(items._id)}>
          {translate("learnMore")}
        </Button>
        <Button size="small" color="primary" onClick={() => handleAddProductToBasket(items)}>
          <ShoppingBasketIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}
