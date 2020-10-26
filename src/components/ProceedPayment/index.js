import React from "react";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  button: {
      backgroundColor:'blue',
      paddingTop:27,
      paddingBottom:27,
      textTransform:'none',
      fontSize:22
  }
}));

export default function Index(props) {
  const classes = useStyles();

  return (
    <ValidatorForm onSubmit={props.handleSubmit}>
      <TextValidator
        label="Email"
        onChange={props.handleChange}
        name="email"
        value={props.email}
        fullWidth
        variant="outlined"
        validators={["required", "isEmail"]}
        errorMessages={["This field is required", "Email is not valid"]}
      />
      <br></br>
      <Button variant="contained" color="primary" fullWidth size="large" endIcon={<ArrowForwardIcon />} className={classes.button}>
        Proceed to payment
      </Button>
    </ValidatorForm>
  );
}
