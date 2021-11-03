import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography style={{ color: "#04AAED", fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button variant="contained" style={{ backgroundColor: "#5CE7ED", color: 'black' }}>BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
    );
};

export default Booking;