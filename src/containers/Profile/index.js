import React from "react";
import {
  Container,
  Grid,
  Box,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import coverImage from "../../assets/images/coverImage.jpg";
import profileImage from "../../assets/images/profileImage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    height: "90%",
    padding: "0.2rem",
    backgroundColor: "white",
    borderRadius: 20,
    
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  header: {
    backgroundImage: "url('../../assets/images/cardImage.jpg')",
    height: "35%",
    borderRadius: "20px 20px 0px 0px",
    backgroundColor: "red",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "20px 20px 0px 0px",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    border: "4px solid white",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    marginTop: "-45px",
  },
  content: {
    textAlign: "center",
    marginBottom:'25px'
  },
  name: {
    textAlign: "center",
    fontWeight: "600",
  },
  location:{
    fontSize:'14px',
    fontWeight:'600'
  },
  button:{
    borderRadius:'30px',
    backgroundColor:'blue',
    fontSize:'12px',
    textTransform:'none'
  }
}));

export default function Index(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Box className={classes.header}>
        <img src={coverImage} className={classes.img} alt="coverImage"></img>
      </Box>
      <Box className={classes.box}>
        <Avatar
          alt="Roy Chong"
          src={profileImage}
          className={classes.large}
        />
      </Box>
      <Box className={classes.content}>
        <Typography variant="h6" className={classes.name}>
          Roy Chong
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.location}
          color={"textSecondary"}
        >
          Edmonton, AB, Canada
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          Pro Level
        </Button>
      </Box>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography variant="body2" className={classes.name} color="textSecondary">
            Followers
          </Typography>
          <Typography variant="h6" className={classes.name}>
            980
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" className={classes.name} color="textSecondary">
            Followers
          </Typography>
          <Typography variant="h6" className={classes.name}>
            980
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" className={classes.name} color="textSecondary">
            Followers
          </Typography>
          <Typography variant="h6" className={classes.name}>
            980
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
