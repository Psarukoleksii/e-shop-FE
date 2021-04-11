import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {FormikProvider} from "formik";
import {useAddProduct} from "../../hooks";
import {CONSTANTS} from "../../config";
import {Input} from "../UI";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  accordionWrapper: {
    width: '40%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const AdminPanel = ({Logout}: any) => {

  const {formik} = useAddProduct()
  const classes = useStyles();

  enum BUTTON {
    SUBMIT = 'submit'
  }

  return (
    <div>
      <h2>Admin panel</h2>
      <div className={classes.accordionWrapper}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Add product!</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FormikProvider value={formik}>
                <form className={classes.form} action={CONSTANTS.form.POST} onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Input
                        id={CONSTANTS.product.category}
                        label={CONSTANTS.product.category}
                        name={CONSTANTS.product.category}
                        onChange={formik.handleChange}
                        value={formik.values.category}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input
                        id={CONSTANTS.product.name}
                        label={CONSTANTS.product.name}
                        name={CONSTANTS.product.name}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input
                        id={CONSTANTS.product.image}
                        label={CONSTANTS.product.image}
                        name={CONSTANTS.product.image}
                        onChange={formik.handleChange}
                        value={formik.values.image}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input
                        id={CONSTANTS.product.producer}
                        label={CONSTANTS.product.producer}
                        name={CONSTANTS.product.producer}
                        onChange={formik.handleChange}
                        value={formik.values.producer}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input
                        id={CONSTANTS.product.mass}
                        label={CONSTANTS.product.mass}
                        name={CONSTANTS.product.mass}
                        onChange={formik.handleChange}
                        value={formik.values.mass}
                        type={CONSTANTS.form.NUMBER}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input
                        id={CONSTANTS.product.weight}
                        label={CONSTANTS.product.weight}
                        name={CONSTANTS.product.weight}
                        onChange={formik.handleChange}
                        value={formik.values.weight}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input
                        id={CONSTANTS.product.counterInStorage}
                        label={CONSTANTS.product.counterInStorage}
                        name={CONSTANTS.product.counterInStorage}
                        onChange={formik.handleChange}
                        value={formik.values.counterInStorage}
                        type={CONSTANTS.form.NUMBER}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input
                        id={CONSTANTS.product.counterOfPurchases}
                        label={CONSTANTS.product.counterOfPurchases}
                        name={CONSTANTS.product.counterOfPurchases}
                        onChange={formik.handleChange}
                        value={formik.values.counterOfPurchases}
                        type={CONSTANTS.form.NUMBER}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type={BUTTON.SUBMIT}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Add product
                  </Button>
                </form>
              </FormikProvider>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <button onClick={() => Logout()}>Logout</button>
    </div>
  )
}
