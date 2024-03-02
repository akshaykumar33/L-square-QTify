import { StyledEngineProvider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import { Outlet } from 'react-router-dom'
import { Divider } from '@mui/material'
import Hero from './components/Hero/Hero'
import Faqs from './components/Faqs/Faqs';
import Album from './components/Album/Album';
import Tab from './components/Tab/Tab';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import Footer from './components/Footer/Footer';
import { createContext,useEffect, useState } from 'react';
import { fetchTopSongs,fetchNewSongs } from './api/api';

export const Contexts = createContext();

function App() {

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);


  const fetchData = async (key, fetchFunction) => {
    try {
      const data = await fetchFunction();
     
      return { [key]: data };
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
      return { [key]: null };
    }
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
        const topAlbumData = await fetchData('topAlbums', fetchTopSongs);
        const newAlbumData = await fetchData('newAlbums', fetchNewSongs);

        // Update state for topAlbum and newAlbum separately
        setTopAlbums(topAlbumData.topAlbums);
        setNewAlbums(newAlbumData.newAlbums);
       
    };

    fetchDataAndSetState();
}); // Empty dependency array to run the effect only once when the component mounts


   return (
    <div className="App">
      <StyledEngineProvider>
      <ThemeProvider theme={theme}>   

        <Navbar />
        {/* <Outlet />  */}
        <Divider />
        <Hero />
        <Divider />
        <Contexts.Provider value={{topAlbums,newAlbums}}>
        <Album
          name={'Top Album'}
        />
        <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
        <Album name={'New Album'}/>
        <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
        <Tab />
        <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
        <Faqs />
        <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
        <Footer />
        </Contexts.Provider>
        </ThemeProvider>
        </StyledEngineProvider> 
        

    </div>
  );
}

export default App;
