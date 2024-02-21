import styles from './Search.module.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Search() {
  return (
    <div className={styles['search-bar']}>
      <Stack direction="row">
        <TextField
          fullWidth
          placeholder='Search an album of your choice'
          id="fullWidth"
          sx={{
            backgroundColor: `var(--color-white)`,
            borderTopLeftRadius: '0.5em',  
            borderBottomLeftRadius: '0.5em',
            borderTopRightRadius: '0em',  
            borderBottomRightRadius: '0em',    
           
            '& .MuiInputBase-root': {
              fontSize: '1em', 
              height: '2em', 
              padding:'1.3em',
              borderTopLeftRadius: '0.5em',  
              borderBottomLeftRadius: '0.5em', 
              borderTopRightRadius: '0em',  
              borderBottomRightRadius: '0em',   
            
            },
          }}
        />
        <Button
          variant="outlined"
          startIcon={<SearchRoundedIcon style={{ fontSize: '2em',color:'var(--secondary-color)' }} />} 
          sx={{
            backgroundColor: 'var(--color-white)',
            borderTopRightRadius: '0.5em',  
            borderBottomRightRadius: '0.5em',
            borderTopLeftRadius: '0em',  
            borderBottomLeftRadius: '0em',   
          }}
        />
      </Stack>
    </div>
  );
}
