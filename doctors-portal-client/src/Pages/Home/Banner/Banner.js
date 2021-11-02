import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography } from '@mui/material';


const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Typography variant="h3">
                        Your new smile <br />
                        Starts Here
                    </Typography>
                    <Typography variant="h6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam facere laudantium eligendi ipsa molestiae! Illo animi odio distinctio unde?
                    </Typography>
                    <Button variant="contained" style={{ backgroundColor: "#5CE7ED", color: 'black' }}>Get Appointment</Button>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img src={chair} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;