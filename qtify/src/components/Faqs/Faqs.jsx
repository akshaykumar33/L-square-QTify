import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Faqs.module.css';
import { Contexts } from '../../pages/HomePage';
import CircularProgress from '@mui/material/CircularProgress';

export default function Faqs() {
  const contexts = React.useContext(Contexts);
  const faqs = contexts.faqs;


  return (
    <div className={styles.faq}>
      <h2>FAQs</h2>
      {!faqs.data? (
        
         <CircularProgress color="secondary"sx={{color:'var(--primary-color)'}} />
        
      ) : (
        faqs.data.map((faq, index) => (
          index!==0?( <Accordion
          key={index}
          
        >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'var(--primary-color)', fontSize: '2em' }} />}
              aria-controls={`panel${index + 1}-content`}
              sx={{
                background: 'var(--secondary-color)',
                color: 'var(--color-white)',
                borderRadius: '0.25em',
                border: '1px solid var(--color-white)',
              }}
              id={`panel${index + 1}-header`}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: 'var(--color-white)', borderRadius: '0.25em' }}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>):(<Accordion
                   defaultExpanded
                   key={index}
        
        >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'var(--primary-color)', fontSize: '2em' }} />}
              aria-controls={`panel${index + 1}-content`}
              sx={{
                background: 'var(--secondary-color)',
                color: 'var(--color-white)',
                borderRadius: '0.25em',
                border: '1px solid var(--color-white)',
              }}
              id={`panel${index + 1}-header`}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: 'var(--color-white)', borderRadius: '0.25em' }}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>)
        ))
      )}
    </div>
  );
}
