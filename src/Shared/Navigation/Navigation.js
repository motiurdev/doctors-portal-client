import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctor Portal
                    </Typography>
                    <Link to="/appointment">APPOINTMENT</Link>
                    {
                        user.email ?
                            <Box>
                                <NavLink to="/dashboard" style={{ margin: "0 10px", textDecoration: "none", color: "white" }}>
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logOut} variant="contained">Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login" style={{ margin: "0 10px", textDecoration: "none", color: "white" }}>
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;