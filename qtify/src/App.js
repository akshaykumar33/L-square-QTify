import { StyledEngineProvider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {

   return (
    <div className="App">
      <StyledEngineProvider>
      <ThemeProvider theme={theme}>   

        <Navbar />
       <Outlet />
       <Footer />
        </ThemeProvider>
        </StyledEngineProvider> 
        

    </div>
  );
}

export default App;
