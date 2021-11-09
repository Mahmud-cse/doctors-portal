import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// start here
import { makeStyles } from '@material-ui/core/styles';
// npm install @material-ui/core --save
// npm install @material-ui/icons

import MoreIcon from '@material-ui/icons/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';


const useStyles = makeStyles(theme => ({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up('md')]: {
            display: "flex",

        },
    },
}))

const Navigation = () => {
    const { user, logOut } = useAuth();

    const classes = useStyles();
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

    const openMobileMenu = (e) => {
        setMobileMenuAnchorEl(e.currentTarget);
    }

    const closeMobileMenu = () => {
        setMobileMenuAnchorEl(null);
    }

    const mobileMenu = (
        <Menu anchorEl={mobileMenuAnchorEl} id="mobile-menu" keepMounted open={isMobileMenuOpen}>
            <MenuItem onClick={closeMobileMenu} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={closeMobileMenu} component={Link} to="/appointment">APPOINTMENT</MenuItem>
            {
                user?.email ?
                    <MenuItem onClick={logOut} to="/" component={Link}>Logout</MenuItem>
                    :
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/login">Login</MenuItem>
            }
            {
                user?.email ?
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/dashboard">Dashboard</MenuItem>
                    :
                    " "
            }
        </Menu>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }} align='left'>
                        <NavLink style={{ textDecoration: "none", color: "black" }} to="/" > Doctors Portal</NavLink>
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <Button style={{ textDecoration: "none", color: "black" }} color="inherit" component={Link} to="/appointment">APPOINTMENT</Button>
                        {
                            user?.email ?
                                <Button color="inherit" component={Link} style={{ textDecoration: "none", color: "black" }} to="/dashboard">Dashboard</Button>
                                :
                                " "
                        }

                        {
                            user?.email ?
                                <Button onClick={logOut} to="/" color="inherit" component={Link} style={{ color: "black" }}>Logout</Button>
                                :
                                <Button style={{ textDecoration: "none", color: "black" }} component={Link} to="/login" color="inherit">Login</Button>
                        }
                    </div>
                    <IconButton onClick={openMobileMenu}>
                        <MoreIcon></MoreIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {mobileMenu}
        </Box >
    );
};

export default Navigation;