import React, {useState } from 'react';
import styles from './Tab.module.css'
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Album from '../Album/Album'
import { useContext } from 'react';
import { Contexts } from '../../pages/HomePage';
import CircularProgress from '@mui/material/CircularProgress';

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
  const songs=contexts.songs?contexts.songs:[];
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {(songs && genres.data) && (
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
                <Tab  label={'all'} {...a11yProps(0)} sx={{ color: 'var(--color-white)' }} />
                {genres.data && genres.data.map((genre, index) => (
                  <Tab key={index} label={genre.label} {...a11yProps(index+1)} sx={{ color: 'var(--color-white)' }} />
                ))}
              </Tabs>
            </Box>
         

            <TabPanel  value={value} index={0} dir={theme.direction}>
                      <Album topSection={false} name={"Songs"} lists={songs}/>;
                    </TabPanel>
          {
            genres.data ? genres.data.map((genre,index) => {
                  let lists= songs.filter((song,i)=>song.genre.label===genre.label);
                  return <TabPanel key={index} value={value} index={index+1} dir={theme.direction}>
                      <Album topSection={false} name={"Songs"} lists={lists}/>;
                    </TabPanel>
            }): <CircularProgress color="secondary"sx={{color:'var(--primary-color)'}} />
          }

        </Box>
      )}
    </>
  );
}