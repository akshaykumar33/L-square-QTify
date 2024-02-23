import styles from './Button.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ButtonComponent(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleOpen}>{props.name}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.modal}>
                    <Box className={styles.header}>
                    <Typography variant="h4" component="h1" className={styles.modalTitle}>
                        Feedback
                    </Typography>
                    <IconButton className={styles.closeIcon} size="small" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    </Box>
                    <Box component="form" sx={{'& .MuiTextField-root': { m: 1},width:'25em', textAlign: 'center' }} noValidate autoComplete="off">
                        <TextField  fullWidth id="fullName" label="Full Name" variant="outlined" />
                        <TextField  fullWidth id="email" label="Email" variant="outlined" />
                        <TextField  fullWidth id="subject" label="Subject" variant="outlined" />
                        <TextField  fullWidth id="description" label="Description" multiline rows={4} variant="outlined" />
                        <Button variant="contained" color="success" className={styles.submitButton}>Submit Feedback</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
