import React from 'react'
import styles from './Footer.module.css';
import Album from '../../assets/images/testalbum.png';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    width:'24em',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? 'primary' : 'var(--primary-color)',
    },
  }));

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.music}>
          <img src={Album} alt='album' className={styles.album}/>
          <div className={styles.names}>
           <div className={styles.header}>
           Song name
            </div> 
            <div className={styles.subHeader}>
            Album name
            </div>
            </div>   
        </div>
        <div className={styles.menu}>
        <div className={styles.pause}>
       <PauseCircleOutlineRoundedIcon style={{color:'var(--color-white)',fontSize: '3em'}}/>
        </div>
        <div className={styles.bar}>
        <span className={styles.timer}>0:38</span><BorderLinearProgress variant="determinate" value={50} /><span className={styles.timer}>3:38</span>
        </div>
        </div>
    </div>
  )
}

export default Footer