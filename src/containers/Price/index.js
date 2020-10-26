import React from "react";
import { Container, Typography, Grid, Button, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HourlyIcon from "@material-ui/icons/Schedule";
import FixedIcon from "@material-ui/icons/Description";
import Title from "../../components/Title";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    height: "90%",
    padding: "1.5rem",
    marginTop: "40px",
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: "3rem",
    paddingRight: "3rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  button: {
    width: "100%",
    backgroundColor: "white",
    color: "black",
    border: "1px solid lightgray",
    textTransform: "none",
    fontWeight: "600",
  },
  active: {
    backgroundColor: "rgb(242,246,255)",
    color: "black",
    border: "1px solid blue",
    textTransform: "none",
    fontWeight: "600",
  },
  icon: {
    color: "blue",
    fontSize: "36px!important",
  },
  price: {
    justifyContent: "center",
    display: "flex",
    marginTop: "20px",
    paddingBottom: "0px",
  },
  body2: {
    paddingLeft: "5px",
    lineHeight: "3.4",
  },
}));

const marks = [
  {
    value: 20,
    label: "$20",
  },
  {
    value: 300,
    label: "$300",
  },
];

export default function Index(props) {
  const classes = useStyles();
  const [price, setPrice] = React.useState();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Title>Set up your pricing</Title>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            <strong>
              Please set up your hourly or fixed rate so that the client is
              aware of your pricing
            </strong>
          </Typography>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={[classes.button, classes.active].join(" ")}
              startIcon={<HourlyIcon className={classes.icon} />}
            >
              Hourly
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<FixedIcon className={classes.icon} />}
            >
              Fixed
            </Button>
          </Grid>
        </Grid>
        <Grid item className={classes.price}>
          <Typography variant="subtitle1" color="textSecondary">
            ${""}
          </Typography>
          <Typography variant="h4">{price}</Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.body2}
          >
            {" "}
            / hour
          </Typography>
        </Grid>
        <Slider
          defaultValue={80}
          getAriaValueText={(value) => setPrice(value)}
          aria-labelledby="discrete-slider-always"
          step={1}
          max={300}
          min={20}
          marks={marks}
        />
      </Grid>
    </Container>
  );
}
