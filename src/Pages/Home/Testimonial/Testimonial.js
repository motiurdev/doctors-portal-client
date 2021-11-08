import React from 'react';
import person1 from '../../../images/people-1.png'
import person2 from '../../../images/people-2.png'
import person3 from '../../../images/people-3.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import { Container, Typography } from '@mui/material';

const Testimonial = () => {
    const testimonial = [
        {
            name: "Winson Harry",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consectetur, tenetur magnam asperiores aliquid suscipit officia possimus vero nisi ratione dolorem quae facilis blanditiis? Sunt repellat veritatis repellendus ea architecto.",
            img: person1,
            country: "california"
        },
        {
            name: "Charlotte",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consectetur, tenetur magnam asperiores aliquid suscipit officia possimus vero nisi ratione dolorem quae facilis blanditiis? Sunt repellat veritatis repellendus ea architecto.",
            img: person2,
            country: "california"
        },
        {
            name: "Amelia",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consectetur, tenetur magnam asperiores aliquid suscipit officia possimus vero nisi ratione dolorem quae facilis blanditiis? Sunt repellat veritatis repellendus ea architecto.",
            img: person3,
            country: "california"
        }
    ]
    return (
        <Box sx={{ flexGrow: 1, my: 10 }}>
            <Container>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'rgb(34, 213, 216)' }}>
                    Testimonial
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: 6, color: 'text.primary', my: 3, mb: 4 }}>
                    What's Our Patients <br />
                    Says
                </Typography>
                <Grid container spacing={2}>
                    {
                        testimonial.map(singleTestimonial => <SingleTestimonial
                            key={singleTestimonial}
                            singleTestimonial={singleTestimonial}
                        ></SingleTestimonial>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;