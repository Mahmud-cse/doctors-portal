import React from 'react';
import Grid from '@mui/material/Grid'
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid style={{ ...verticalCenter, textAlign: "left" }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your new smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, color: "gray", fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam facere laudantium eligendi ipsa molestiae! Illo animi odio distinctio unde?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#5CE7ED", color: 'black' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;