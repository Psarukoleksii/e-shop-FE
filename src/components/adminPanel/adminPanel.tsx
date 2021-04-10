import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {FormikProvider} from "formik";
import {useAddProduct} from "../../hooks";
import {CONSTANTS} from "../../config";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  accordionWrapper: {
    width: '50%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const AdminPanel = ({Logout}: any) => {

  const { formik } = useAddProduct()
  const classes = useStyles();

  return (
    <div>
      <h2>Admin panelll</h2>
      <div className={classes.accordionWrapper}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Add product!</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FormikProvider value={formik}>
                <form action={CONSTANTS.form.POST} onSubmit={formik.handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id={CONSTANTS.product.category}
                    label={CONSTANTS.product.category}
                    name={CONSTANTS.product.category}
                    autoFocus
                    onChange={formik.handleChange}
                    value={formik.values.category}
                  />
                  <button type={"submit"}>Add product</button>
                </form>
              </FormikProvider>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <button onClick={()=>Logout()}>Logout</button>
    </div>
  )
}
