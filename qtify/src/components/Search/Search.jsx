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
            borderTopLeftRadius: '15px',  
            borderBottomLeftRadius: '15px',  
           
            '& .MuiInputBase-root': {
              fontSize: '26px', 
              height: '3em', 
            
            },
          }}
        />
        <Button
          variant="outlined"
          startIcon={<SearchRoundedIcon style={{ fontSize: '3em',color:'var(--secondary-color)' }} />} 
          sx={{
            backgroundColor: 'var(--color-white)',
            borderTopRightRadius: '15px',  
            borderBottomRightRadius: '15px',  
          }}
        />
      </Stack>
    </div>
  );
}
