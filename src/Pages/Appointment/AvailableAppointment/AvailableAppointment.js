import React, { useState } from 'react';
import { Alert, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Booking from '../Appointment/Booking/Booking';

const AvailableAppointment = ({ date, setDate }) => {

    const [bookingSuccess, setBookingSuccess] = useState(false)

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            price: 25,
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            price: 30,
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            price: 40,
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            price: 15,
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            price: 50,
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            price: 45,
            space: 10,
        },
    ]

    return (
        <Container>
            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: "center", py: 5 }}>
                Available Appointment {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booking Successfully</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        date={date}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;