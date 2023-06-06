import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const rootStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px',
    backgroundColor: '#2196f3',
    color: '#ffffff',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    width: '100%',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center',
  };

  const descriptionStyle = {
    fontSize: '1.5rem',
    marginBottom: '32px',
    textAlign: 'center',
  };

  const buttonStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  return (
    <div style={rootStyle}>
      <div style={contentStyle}>
        <Typography variant="h1" style={titleStyle}>
          Welcome to the Portfolio of Bryant Suiskens
        </Typography>
        <Typography variant="h2" style={descriptionStyle}>
          Front-end developer and application engineer
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to={"/bryant-portfolio/aboutme"}
          style={buttonStyle}
        >
          Get to know me
        </Button>
      </div>
    </div>
  );
};

export default HomePage;