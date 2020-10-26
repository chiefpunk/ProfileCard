import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, ButtonBase } from "@material-ui/core";
import logo from "../../assets/images/business_plan_logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: "rgb(242,246,255)",
  },
  image: {
    width: 70,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  title: {
    fontWeight: 600,
  },
  subtitle: {
    color: "rgb(72,114,255)",
    fontWeight: 600,
  },
  content: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  price: {
    justifyContent: "center",
    display: "flex",

  },
  active: {
    border: "1px solid blue",
  },
  details: {
    alignItems: "center",
  },
  body2:{
    paddingLeft:'5px',
    lineHeight:'3.4'
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={[classes.paper, classes.active].join(' ')}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container className={classes.details}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className={classes.content}>
                <Typography variant="body1" className={classes.title}>
                  Small Business
                </Typography>
                <Typography variant="overline" className={classes.subtitle}>
                  change plan
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.price}>
              <Typography variant="subtitle1" color="textSecondary">${""}</Typography>
              <Typography variant="h4">8,350</Typography>
              <Typography variant="body2" color="textSecondary" className={classes.body2}> / year</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
