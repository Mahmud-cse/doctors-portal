import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { typography } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, loading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'medium' }} vaiant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password"
                            onChange={handleOnChange}
                            label="Your Password"
                            type="password"
                            variant="standard" />
                        <NavLink
                            to="/register" style={{ textDecoration: 'none' }}><Button variant="text">New User? Please Register</Button>
                        </NavLink>

                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit" style={{ backgroundColor: "#5CE7ED", color: 'black' }}>Login</Button>



                        {user.email && !authError && <Alert severity="success">Login Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>

                    <p>Or</p>

                    <Button onClick={handleGoogleSignIn} sx={{ width: '75%', m: 1 }} variant="contained" type="submit" style={{
                        backgroundColor: "#f44336", color: 'black'
                    }}>Google Sign In</Button>
                    <br></br>
                    {loading && <CircularProgress />}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;