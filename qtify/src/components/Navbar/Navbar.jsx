import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './Navbar.module.css';
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <nav>
      <Box className={styles.navbar} >
        <Box display="grid" gridTemplateColumns="auto 1fr auto" gap={5}>
          <Box>
            <Logo/>
          </Box>
          <Box style={{ justifySelf: 'center',width:'55%'}}>
            <Search/>
          </Box>
          <Box >
            <Button name={"Give Feedback"}/>
          </Box>
        </Box>
      </Box>
    </nav>
  );
}

export default Navbar;
