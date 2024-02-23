import './App.css';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Faqs from './components/Faqs/Faqs';
import Album from './components/Album/Album';
import Tab from './components/Tab/Tab';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>


      <Navbar />
      <Divider/>
      <Hero />
      <Divider/>
      <Album/>
      <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
      <Album/>
      <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
      <Tab/>
      <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
      <Faqs />
      <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
      <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
