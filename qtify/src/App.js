import './App.css';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Faqs from './components/Faqs/Faqs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Divider/>
      <Hero />
      <Divider sx={{ backgroundColor: 'var(--primary-color)', height: '1px' }} />
      <Faqs />
    </div>
  );
}

export default App;
