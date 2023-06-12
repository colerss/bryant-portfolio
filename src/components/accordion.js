import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
const SimpleAccordion = ({ children, title }) => {
  const [expanded, setExpanded] = useState(false);
  const {t, i18n} = useTranslation()
  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleAccordionChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="accordion-content" id="accordion-header">
        {t(title)}
      </AccordionSummary>
      <AccordionDetails>
        {expanded && children}
      </AccordionDetails>
    </Accordion>
  );
};

export default SimpleAccordion;