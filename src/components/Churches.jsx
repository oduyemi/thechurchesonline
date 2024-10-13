import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import church data
const churchData = [
  {
    name: 'Daystar Christian Center',
    videoCover: require("../assets/churches/daystar.jpg"),
    dp: require("../assets/churches/logos/daystar.png"),
    title: 'The overflow || Sunday Service || 13th October 2024',
  },
  {
    name: 'The Fountain of Life Church',
    videoCover: require("../assets/churches/tfolc.jpg"),
    dp: require("../assets/churches/logos/tflc.jpeg"),
    title: 'The Supernatural || Sunday Service || 13th October 2024',
  },
  {
    name: 'Rhema Chapel International Churches, Ikorodu',
    videoCover: require("../assets/churches/rcic.jpeg"),
    dp: require("../assets/churches/logos/rcic.png"),
    title: 'What Did You Say Is Wrong With Me? || Sunday Service || 13th October 2024',
  },
  {
    name: 'The Covenant Nation',
    videoCover: require("../assets/churches/tcn.jpg"),
    dp: require("../assets/churches/logos/tcn.png"),
    title: 'Healing & Deliverance Service || Sunday Service || 13th October 2024',
  },
  {
    name: 'Global Harvest Church, Maryland, Lagos',
    videoCover: require("../assets/churches/ghc.jpeg"),
    dp: require("../assets/churches/logos/ghc.png"),
    title: 'The Supernatural || Sunday Service || 13th October 2024',
  },
  {
    name: 'Grace Assembly',
    videoCover: require("../assets/churches/grace_assembly.jpg"),
    dp: require("../assets/churches/logos/ga.jpeg"),
    title: "The Believer's Authority || Sunday Service || 13th October 2024",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#121212', // Dark theme background
  },
  sidebar: {
    width: '240px',
    backgroundColor: '#181818',
    padding: '16px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  mainContent: {
    flexGrow: 1,
    padding: '16px',
    overflowY: 'auto',
  },
  videoCard: {
    marginBottom: '16px',
    borderRadius: '8px',
    transition: 'box-shadow 0.2s',
    '&:hover': {
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    },
  },
  videoImage: {
    width: '100%',
    borderRadius: '8px',
  },
  dpImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '8px',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: '8px',
  },
  gridContainer: {
    marginTop: '16px',
  },
}));

export const ChurchesOnline = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.sidebar}>
        <Typography variant="h6" color="white">Categories</Typography>
        <Button fullWidth>Live Streams</Button>
        <Button fullWidth>Archived Services</Button>
        <Button fullWidth>Upcoming Events</Button>
      </Box>
      <Box className={classes.mainContent}>
        <Typography variant="h4" color="white">Church Services</Typography>
        <Grid container spacing={3} className={classes.gridContainer}>
          {churchData.map((church, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className={classes.videoCard}>
                <img src={church.videoCover} alt={church.name} className={classes.videoImage} />
                <Box display="flex" alignItems="center" marginTop={1}>
                  <img src={church.dp} alt={`${church.name} DP`} className={classes.dpImage} />
                  <Typography className={classes.title} color="white">{church.title}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};


