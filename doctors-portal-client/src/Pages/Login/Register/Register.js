import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, loading, authError } = useAuth();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        } else {
            registerUser(loginData.email, loginData.password, loginData.name, navigate);
        }
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'medium' }} vaiant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!loading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            label="Your Name"
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            label="Your Email"
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Your Password"
                            type="password"
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="ReType Your Password"
                            type="password"
                            variant="standard" />

                        <NavLink
                            to="/login" style={{ textDecoration: 'none' }}><Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>

                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" style={{ backgroundColor: "#5CE7ED", color: 'black' }}>Register</Button>
                    </form>}
                    {loading && <CircularProgress />}
                    {user.email && !authError && <Alert severity="success">User Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;