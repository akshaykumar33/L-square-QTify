import React, {useState,useEffect,useContext } from 'react';
import styles from './Tab.module.css'
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Album from '../Album/Album'
import { Contexts } from '../../pages/HomePage';

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
   const[permission,setPermission]=useState(false);
 const [filtered,setFiltered]=useState([]);
  const genres= contexts.genres?contexts.genres:[];
  const [songs,setSongs]=useState(contexts.songs?contexts.songs:[]);
  let counts = {'r': 12, 'j': 11, 'p': 12, 'b': 8};
 

 useEffect(() => {
  function createSongs(key, value, m) {
    let arr = [];
    for (let i = 1; i <= m; i++) {
      let tempSong = {
        "id": `f4377d17-eef9-4e2f-80a5-0658fa095017${i + key}`,
        "title": "Lady",
        "artists": ["Sean Schroeder", "Sherman Doyle"],
        "genre": {
          "key": `${key}`,
          "label": `${value}`
        },
        "likes": 16091,
        "image": "https://images.pexels.com/photos/15379/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 43802
      }
      arr.push(tempSong);
    }
    //console.log("label",arr,arr.length,m)
    return arr;
  }

  const filterSongsByGenre = () => {
    let newFilteredSongs = [];

    genres.data && genres.data.forEach(genre => {
      let songList = songs.filter(song => song.genre.label === genre.label);
      let n = Number(songList.length);

      switch (genre.label) {
        case 'Rock':
          if (n >= counts.r) {
            songList.splice(12);
            newFilteredSongs.push(
              ...songList
            )
          } else {
            let arr = createSongs('rock', "Rock", counts['r']-n);
            newFilteredSongs.push(
              ...songList,
              ...arr
            );
          }
          break;

        case 'Jazz':
          if (n >= counts.j) {
           songList.splice(11);
            newFilteredSongs.push(
              ...songList
            )
          } else {
            let arr = createSongs('jazz', "Jazz", counts['j']-n);
            newFilteredSongs.push(
              ...songList,
              ...arr
            );
          }
          break;

        case 'Pop':
          if (n >= counts.p) {
            songList.splice(12);
            newFilteredSongs.push(
              ...songList
            )
          } else {
            let arr = createSongs('pop', "Pop", counts['p']-n);
            newFilteredSongs.push(
              ...songList,
              ...arr
            );
          }
          break;

        case 'Blues':
          if (n >= counts.b) {
            songList.splice(8);
            newFilteredSongs.push(
              ...songList
            )
          } else {
            let arr = createSongs('blues', "Blues", counts['b']-n);
            newFilteredSongs.push(
              ...songList,
              ...arr
            );
          }
          break;

        default:
          break;
      }
    });

    setSongs(newFilteredSongs);
    setFiltered(newFilteredSongs)

    filtered.length!==0?setPermission(true):setPermission(false);
  };

  filterSongsByGenre();
}, [songs, genres]);


  //console.log("permission Trail",songs,permission,filtered);
let passingTrail=permission && songs && filtered && genres.data;
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
         


            {
  genres.data && genres.data.map((genre,index) => {
    let filteredSongs = filtered.filter((song, i) => song.genre.label === genre.label);
  
      let songCount = filteredSongs.length; 
     //console.log("filteredSongs",genre.label,songCount);
    return (
      <TabPanel key={index} value={value} index={index} dir={theme.direction}>
        {songCount > 0 ? (
          <Album topSection={false} name={"Songs"} lists={filteredSongs} />
        ) : (
          <Typography>No songs available for this genre</Typography>
        )}
      </TabPanel>
    );
  })
}


        </Box>
      )}
    </>
  );
}
