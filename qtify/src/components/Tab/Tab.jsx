import * as React from 'react';
import styles from './Tab.module.css'
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Album from '../Album/Album'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{backgroundColor: 'var(--secondary-color)'}}
    >
      {value === index && (
        <Box >
        {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box className={styles.conatiner}>
        <Box className={styles.typo}>
        <Typography >
          Songs
        </Typography>
        </Box>
        <AppBar position="static" sx={{ backgroundColor: 'var(--secondary-color)' }}>
            <Box sx={{ width: '35%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
            
          >
            <Tab label="All" {...a11yProps(0)} sx={{color:'var(--color-white)'}} />
            <Tab label="Rock" {...a11yProps(1)} sx={{color:'var(--color-white)'}}/>
            <Tab label="Pop" {...a11yProps(2)} sx={{color:'var(--color-white)'}}/>
            <Tab label="Jazz" {...a11yProps(3)} sx={{color:'var(--color-white)'}}/>
            <Tab label="Blue" {...a11yProps(4)} sx={{color:'var(--color-white)'}}/>
          </Tabs>
          </Box> 
        </AppBar>
  
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Album topSection={false}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Album topSection={false}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Album topSection={false}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Album topSection={false}/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Album topSection={false}/>
        </TabPanel>
      </Box>
    );
  }
