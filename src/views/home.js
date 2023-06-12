import React, { useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const rootStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px',
    opacity: 0,
    transition: "opacity 0.5s ease-in-out",
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
    color: 'text.background'
  };

  const descriptionStyle = {
    fontSize: '1.5rem',
    marginBottom: '32px',
    textAlign: 'center',
    color: 'text.background'
  };

  const buttonStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'text.secondary'
  };
  useEffect(() => {
    const rootElement = document.getElementById('homewrapper');
    if (rootElement) {
      rootElement.style.opacity = '1';
    }
  }, []);
  const {t, i18n} = useTranslation();
  return (
    <div id={"homewrapper"} style={rootStyle}>
      <div style={contentStyle}>
        <Typography variant="h1" sx={titleStyle}>
          {t("Welcome Message")}
        </Typography>
        <Typography variant="h2" sx={descriptionStyle}>
          {t("Roles Message")}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to={"/bryant-portfolio/aboutme"}
          sx={buttonStyle}
        >
         {t("Invitation Message")}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;