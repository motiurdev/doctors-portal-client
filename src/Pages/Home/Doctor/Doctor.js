import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img src={`data:image/jpeg;base64,${image}`} width="200" height="250" alt="" />
            <h2>{name}</h2>
        </Grid>
    );
};

export default Doctor;