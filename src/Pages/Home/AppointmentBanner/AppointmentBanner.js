import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(34, 53, 88,0.9)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -110 }}
                        src={doctor}
                        alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant="h6" style={{ color: '#22D5D8', }} sx={{ mb: 5, }}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant="h4" style={{ color: "white" }}>
                            Make and appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ fontWeight: 300, fontSize: 14, color: "white" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore sit quis voluptate impedit quidem, voluptatum consequatur nam. Sunt, distinctio?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#22D5D8', }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;