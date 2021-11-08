import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const SingleTestimonial = (props) => {
    const { name, img, des, country } = props.singleTestimonial;
    return (
        <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
                <Typography sx={{ lineHeight: 2 }}>
                    {des}
                </Typography>
                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={3} md={2}>
                        <img src={img} width="60" alt="" sx={{ borderRadius: '50%' }} />
                    </Grid>
                    <Grid item xs={9} md={10}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'rgb(34, 213, 216)', pl: 2 }}>
                            {name}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 15, pl: 3 }}>
                            {country}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default SingleTestimonial;