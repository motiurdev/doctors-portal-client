import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography, Box } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,

}

const vericalCenter = {
    display: "flex",
    height: 450,
    alignItems: "center",
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={vericalCenter}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 15, color: "gray", fontWeight: 300, my: 3 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequatur enim expedita omnis a. Recusandae tempore velit odit vitae suscipit?
                        </Typography>
                        <Button style={{ backgroundColor: '#22D5D8', color: "white" }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={vericalCenter}>
                    <img style={{ width: 350 }} src={chair} alt="" />
                </Grid>

                <Grid container spacing={4} >
                    <Grid item xs={12} md={4} style={{ display: "flex", justifyContent: "space-between" }}>
                        <Grid container spacing={2} style={{ backgroundColor: "#19CACD", color: "white" }} sx={{ p: 2, borderRadius: 2 }}>
                            <Grid item xs={5} md={3}>
                                <i class="far fa-clock fa-3x"></i>
                            </Grid>
                            <Grid item xs={7} md={9}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    Opening hours
                                </Typography>
                                <Typography variant="h6" sx={{ fontSize: 14 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, doloribus.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} style={{ backgroundColor: "hsl(223deg 19% 28%)", color: "white" }} sx={{ p: 2, borderRadius: 2 }}>
                            <Grid item xs={5} md={3}>
                                <i class="fas fa-map-marker-alt fa-3x"></i>
                            </Grid>
                            <Grid item xs={7} md={9}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    Visit Our Location
                                </Typography>
                                <Typography variant="h6" sx={{ fontSize: 14 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, doloribus.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} style={{ backgroundColor: "#19CACD", color: "white" }} sx={{ p: 2, borderRadius: 2 }}>
                            <Grid item xs={5} md={3}>
                                <i class="fas fa-phone-volume fa-3x"></i>
                            </Grid>
                            <Grid item xs={7} md={9}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    Contact us Now
                                </Typography>
                                <Typography variant="h6" sx={{ fontSize: 14 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, doloribus.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;