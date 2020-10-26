import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  titile: {
      fontWeight:600
  }
});

export default function Index({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom className={classes.titile}>
        {children}
      </Typography>
    </div>
  );
}