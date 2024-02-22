import React from 'react';
import styles from './Hero.module.css'
import Box from '@mui/material/Box';
import HeroImage from '../../assets/images/vibrating-headphone.png';

function Hero() {
  return (
    <header >

        <Box className={styles["hero"]} >
        <Box display="grid" gridTemplateColumns="auto 1fr auto" >
          <Box  className={styles.headings} style={{ justifySelf: 'center'}}>
          <Box>100 Thousand Songs, ad-free  </Box>     
           <Box>Over thousands podcast episodes </Box> 
           </Box>
     <Box style={{marginTop:'1em'}}>
     <img src={HeroImage} alt="Hero-Headphone" style={{ width: '15em', height: '14em'}}/>
     </Box>
          </Box>
          
     
      </Box>
     

    </header>
  )
}

export default Hero