import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Fluorosis is a condition that causes white streaks or other discoloration on the teeth. Fluorosis happens when a child ingests too much fluoride while their baby and adult teeth are developing under the gums. A child can develop fluorosis from birth to 8 years of age.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Having a cavity filled may cause some discomfort, but it should not cause pain. Anyone who experiences moderate or severe pain during or after the procedure should let their dentist know.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5, mt: 11 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ textAlign: 'center', m: 2, fontWeight: 600, color: 'info.main' }}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" component="div" sx={{ textAlign: 'center', m: 5, fontWeight: 600 }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;