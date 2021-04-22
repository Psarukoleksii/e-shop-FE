import React from 'react';
import {Button, Grid, Slider, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ModalWindow} from "../UI";
import {Link} from 'react-router-dom';
import {CONSTANTS, ROUTERS} from "../../config";
import {useRateProduct} from "../../hooks";
import {Alert} from "@material-ui/lab";
import translate from "../../i18n/translate";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export const RateProduct = () => {
  const { addRate, setOpenModal, openModal, valuetext, success, rating } = useRateProduct();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider)" gutterBottom>
        {translate("rateProduct")}
      </Typography>
      {rating &&
        <Typography>
        Average product rating - {rating} of 5
      </Typography>
      }
      <Slider
        defaultValue={2.5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={0}
        max={5}
      />
      <Grid container direction="row">
        <Grid>
          <Button variant="contained" color="primary" onClick={()=> addRate()}>Rate</Button>
        </Grid>
        <Grid style={{marginLeft: 15}}>
          { success && <Alert severity="success">Rated!</Alert> }
        </Grid>
      </Grid>
      <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
        <Link style={{color: "black"}} to={ROUTERS.authorization}>Sign in</Link> {CONSTANTS.errorMessages.signInForThisAction}
      </ModalWindow>
    </div>
  )
}
