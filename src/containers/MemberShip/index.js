import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../components/Title";
import BusinessPlan from "../../components/BusinessPlan";
import PaymentDetails from "../../components/PaymentDetails";
import ProceedPayment from "../../components/ProceedPayment";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    height: "100%",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: 20,
  },
  subtitle: {
    color: "gray",
  },
}));

export default function Index(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const handleChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handleSubmit = () => {
    console.log("maksim");
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Title>Upgrade your plan</Title>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            <strong>
              Please make the payment to start enjoying all the features of our
              premium plan as soon as possible
            </strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <BusinessPlan />
        </Grid>
        <Grid item xs={12}>
          <PaymentDetails />
        </Grid>
        <Grid item xs={12}>
          <ProceedPayment handleChange={handleChange} handleSubmit={handleSubmit} email={email} />
        </Grid>
      </Grid>
    </Container>
  );
}
