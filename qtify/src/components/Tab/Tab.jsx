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

export default function FullWidthTabs({filteredData,filteredDataValues}) {
  const theme = useTheme();
  const [value, setValue] = useState(0);
    const contexts = useContext(Contexts);
   
  const genres= contexts.genres?contexts.genres:[];
  
  const songs=filteredDataValues;
 



 let passingTrail= songs  && genres.data 
  const handleChange = (event, newValue) => {
    filteredData(newValue)
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
                

<Tab  label={"jazz"} {...a11yProps(0)} sx={{ color: 'var(--color-white)' }} />
<Tab  label={"rock"} {...a11yProps(1)} sx={{ color: 'var(--color-white)' }} />
<Tab  label={"pop"} {...a11yProps(2)} sx={{ color: 'var(--color-white)' }} />
<Tab  label={"blues"} {...a11yProps(3)} sx={{ color: 'var(--color-white)' }} />
              </Tabs>
            </Box>
         


  
<TabPanel  value={value} index={0} dir={theme.direction}>
  <Album topSection={false} name={"Songs"} lists={songs} />
    </TabPanel>
    <TabPanel  value={value} index={1} dir={theme.direction}>
  <Album topSection={false} name={"Songs"} lists={songs} />
    </TabPanel>
    <TabPanel  value={value} index={2}  dir={theme.direction}>
  <Album topSection={false} name={"Songs"} lists={songs} />
    </TabPanel>
    <TabPanel  value={value} index={3} dir={theme.direction}>
  <Album topSection={false} name={"Songs"} lists={songs} />
    </TabPanel>

        </Box>
      )}
    </>
  );
}
