import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import styles from './Faqs.module.css';

export default function Faqs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={styles.faq}>
        <h2>FAQs</h2>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
            background:'var(--secondary-color)',borderRadius:'0.25em',
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'var(--primary-color)',fontSize: '2em'}}/>}
          aria-controls="panel1-content"
          sx={{background:'var(--secondary-color)',color:'var(--color-white)',borderRadius:'0.25em',border:'1px solid var(--color-white)'}}
          id="panel1-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{background:'var(--color-white)',borderRadius:'0.25em'}}>
          <Typography>
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background:'var(--secondary-color)',borderRadius:'0.25em'}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{color:'var(--primary-color)',fontSize: '2em'}}/>}
        aria-controls="panel2-content"
        sx={{background:'var(--secondary-color)',color:'var(--color-white)',borderRadius:'0.25em',border:'1px solid var(--color-white)'}}
          id="panel2-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{background:'var(--color-white)',borderRadius:'0.25em'}}>
          <Typography>
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}