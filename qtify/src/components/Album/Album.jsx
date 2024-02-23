import React, { useState, useRef } from 'react';
import styles from './Album.module.css';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CardComponent from '../Card/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Album({topSection="true"}) {
    const sliderRef = useRef(null);
    const [showAll, setShowAll] = useState(false);

    const handleNextSlide = () => {
        sliderRef.current.swiper.slideNext();
    };

    const handlePrevSlide = () => {
        sliderRef.current.swiper.slidePrev();
    };

    return (
        <div className={styles.container}>
            {topSection &&(<Box className={styles.topSection}>
                <Box className={styles.corner1}>
                    <Typography className={styles.typo}>
                        Top Album
                    </Typography>
                </Box>
                <Box className={styles.corner2}>
                    <Button sx={{color:'var(--primary-color)'}} onClick={() => setShowAll(!showAll)}>
                        {!showAll ? "Show All" : "Collapse All"}
                    </Button>
                </Box>
            </Box>)}
            {!showAll ? (
                <>
                    <Box className={styles.icons}>
                        <IconButton className={styles.leftIcon} onClick={handlePrevSlide} style={{ fontSize: '1em', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'var(--color-white)' }}>
                            <ChevronLeftIcon style={{ fontSize: '1em' }} />
                        </IconButton>
                        <IconButton className={styles.rightIcon} onClick={handleNextSlide} style={{ fontSize: '1em', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'var(--color-white)' }}>
                            <ChevronRightIcon style={{ fontSize: '1em' }} />
                        </IconButton>
                    </Box>
                    <Box className={styles.sliderContainer}>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={6}
                            spaceBetween={40} 
                            className="mySwiper"
                            ref={sliderRef}
                            navigation={false} 
                        >
                            {Array.from({ length: 12 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.slider}>
                                        <CardComponent />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </>
            ):(<>
             <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        
        {Array.from({ length: 12 }).map((_, index) => (
                                 <Grid item xs={2} md={2} lg={2}>
                                    <div className={styles.card}>
                                        <CardComponent />
                                    </div>
                                    </Grid>
                            ))}
        
        
      </Grid>
    </Box>
            </>)}
        </div>
    );
}

export default Album;
