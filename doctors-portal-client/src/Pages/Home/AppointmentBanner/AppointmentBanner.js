import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(60, 85, 95,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 170,
    width: "auto",
    backgroundRepeat: 'no-repeat',
}

const AppointmentBanner = () => {
    return (

        <Box style={appointmentBg} sx={{ flexGrow: 1, mb: 2, p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 300, marginBottom: "-20px" }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', textAlign: 'left', pr: 2, alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: "#5CE7ED" }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: "white" }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3 }} style={{ color: "white", fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda esse modi amet impedit corrupti dicta natus eaque, veniam rerum?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#5CE7ED", color: 'black' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;