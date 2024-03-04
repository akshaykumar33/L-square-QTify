import React, {useState,useEffect,useContext } from 'react';
import styles from './Tab.module.css'
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Album from '../Album/Album'
import { Contexts } from '../../pages/HomePage';
import db from '../../api/db.json'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{ backgroundColor: 'var(--secondary-color)' }}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
    const contexts = useContext(Contexts);
   
  const genres= contexts.genres?contexts.genres:[];
  
  const songs=contexts.songs;
 
  let jazz=songs.filter((song) => song.genre.label === 'Jazz');
  let pop=songs.filter((song) => song.genre.label === 'Pop')
  let rock=songs.filter((song) => song.genre.label === 'Rock')
  let blues=songs.filter((song) => song.genre.label === 'Blues')
  // console.log(jazz,pop,rock,blues);


 let passingTrail= songs  && genres.data && jazz && pop && rock && blues;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {passingTrail && (
        <Box className={styles.container}>
          <Box className={styles.typo}>
            <Typography>
              Songs
            </Typography>
          </Box>
         
            <Box sx={{ width: '35%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="secondary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                {genres.data && genres.data.map((genre, index) => (
                  <Tab key={index} label={genre.label} {...a11yProps(index)} sx={{ color: 'var(--color-white)' }} />
                ))}
              </Tabs>
            </Box>
         


  
<TabPanel  value={value} index={0} dir={theme.direction}>
  <Album topSection={false} name={"Songs"} lists={jazz} />
    </TabPanel>
    <TabPanel  value={value} index={1} dir={theme.direction}>
  <Album topSection={false} name={"Songs"} lists={rock} />
    </TabPanel>
    <TabPanel  value={value} index={2}  dir={theme.direction}>
  <Album topSection={false} name={"Songs"} lists={pop} />
    </TabPanel>
    <TabPanel  value={value} index={3} dir={theme.direction}>
  <Album topSection={false} name={"Songs"} lists={blues} />
    </TabPanel>

        </Box>
      )}
    </>
  );
}
