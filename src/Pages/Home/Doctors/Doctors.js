import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch("https://mighty-ridge-85117.herokuapp.com/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Container>
            <div>
                <h2>Our Doctors: {doctors.length}</h2>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </div>
        </Container>
    );
};

export default Doctors;