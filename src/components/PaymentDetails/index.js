import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import PaymentCard from "../PaymentCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontWeight: 600,
    marginBottom: 15,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.title}
      >
        Payment Details
      </Typography>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12}>
          <PaymentCard className={classes.paper} cardNumber="2344234544328880" />
        </Grid>
        <Grid item xs={12}>
          <PaymentCard className={classes.paper} cardNumber="8890 3455 2345 1234" />
        </Grid>
        <Grid item xs={12}>
          <Button small="medium" color="primary"><strong>ADD PAYMENT METHOD</strong></Button>
        </Grid>
      </Grid>
    </div>
  );
}
