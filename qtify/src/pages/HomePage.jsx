import React,{useEffect, useState} from 'react'
import { Divider } from '@mui/material'
import Hero from '../components/Hero/Hero'
import Faqs from '../components/Faqs/Faqs';
import Album from '../components/Album/Album';
import Tab from '../components/Tab/Tab';
import { fetchTopSongs,fetchNewSongs,fetchGenres,fetchSongs, fetchFaqs } from '../api/api';
import { createContext } from 'react';


export const Contexts = createContext();
function HomePage() {

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [faqs,setFaqs] =useState({});
  const [filteredDataValues,setFilteredDataValues]=useState([]);
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
        const songsData=await fetchData('songs', fetchSongs);;
        const genresData=await fetchData('genres', fetchGenres);
        const faqData=await fetchData('faqs', fetchFaqs);

        await setTopAlbums(topAlbumData.topAlbums);
        await setNewAlbums(newAlbumData.newAlbums);
        await setGenres(genresData.genres);
        await setSongs(songsData.songs);
        await setFaqs(faqData.faqs);
       
        
    };

    fetchDataAndSetState();


    

},[]); 
const generateSongsData = (value) => {
  let songData = songs;
  let key;
  if (value === 0) {
    setFilteredDataValues(songData)
    return;
  }
  else if (value === 1) {
    key = 'rock'
  }
  else if (value === 2) {
    key = 'pop'
  }
  else if (value === 3) {
    key = 'jazz'
  }
  else if (value === 4) {
    key = 'blues'
  }
  const data = songData.filter((item) => {
    return item.genre.key === key
  })
  setFilteredDataValues(data)
}

const filteredData = (val) => {
  generateSongsData(val)
}
  return (
    <>
    
    <Divider />
        <Hero />
        <Divider />
        <Contexts.Provider value={{topAlbums,newAlbums,genres,songs,faqs}}>
        {topAlbums && (<Album
          name={'Top Albums'}
        />)}
        <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
        {newAlbums && (<Album name={'New Albums'}/>)}
        <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
        {(genres.data && songs && filteredDataValues) && (<Tab filteredData={filteredData} filteredDataValues={filteredDataValues} />)}
        <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
       {faqs && ( <Faqs />)}
        <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
        
        </Contexts.Provider>   
     
        </>
  )
}

export default HomePage