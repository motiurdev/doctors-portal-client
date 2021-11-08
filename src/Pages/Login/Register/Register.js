import { Button, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from "../../../images/login.png"
import CircularProgress from '@mui/material/CircularProgress';



const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isLoading, authError } = useAuth()


    const history = useHistory()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...loginData }
        newUserData[field] = value;
        setLoginData(newUserData)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert("Your password don't match")
        }
        registerUser(loginData.email, loginData.name, loginData.password, history)


    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 10 }}>
                    <Typography sx={{ textAlign: "center" }} variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password"
                            label="Your Password"
                            type="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password2"
                            label="Retype Your Password"
                            type="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ width: "75%", m: 1 }}
                        >
                            Register
                        </Button>
                        <NavLink
                            to="/login"
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="text">Already User ? please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} style={{ width: "100%" }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;