import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import credit_card from "../../assets/images/credit_card.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    border: "none",
  },
  image: {
    width: 70,
  },
  img: {
    margin: "auto",
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  title: {
    fontWeight: 600,
  },
  subtitle: {
    fontWeight: 600,
  },
  content: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  ccv: {
    justifyContent: "center",
    display: "flex",
  },
  active: {
    border: "1px solid blue",
  },
  details: {
    alignItems: "center",
  },
}));

const formatCardNumber = (value) => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) => {
    $2 = $3 = "****";
    return [$1, $2, $3, $4].filter((group) => !!group).join(" ");
  });
};

export default function Index(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={credit_card} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container className={classes.details}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className={classes.content}>
                <Typography variant="body1" className={classes.title}>
                  Credit Card
                </Typography>
                <Typography
                  variant="overline"
                  className={classes.subtitle}
                  color="textSecondary"
                >
                  {formatCardNumber(props.cardNumber)}
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.ccv} xs={3}>
              <TextField
                id="cvc"
                label="CVC"
                variant="outlined"
                color="primary"
                size="small"
                type="number"
                inputProps={{ min: "3", max: "3"}}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
