import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from "../../../images/login.png"

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { loginUser, isLoading, authError, user, signInWithGoogle } = useAuth()

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...loginData }
        newUserData[field] = value;
        setLoginData(newUserData)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        loginUser(loginData.email, loginData.password, location, navigate)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 10 }}>
                    <Typography sx={{ textAlign: "center" }} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password"
                            label="Your Password"
                            type="password"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ width: "75%", m: 1 }}
                        >
                            Login
                        </Button>
                        <NavLink
                            to="/register"
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="text">New User ? please crate account</Button>
                        </NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login Successfully</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                    <Button variant="contained" onClick={handleGoogleSignIn}>Sign In Google</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} style={{ width: "100%" }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;