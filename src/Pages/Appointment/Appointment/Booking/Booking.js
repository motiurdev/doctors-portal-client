import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import BookingModal from '../../BookingModal/BookingModal';


const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space, price } = booking;

    const [modal, setModal] = React.useState(false);
    const modalOpen = () => setModal(true);
    const modalClose = () => setModal(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5, textAlign: "center" }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main', fontWeight: 600 }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Price ${price}
                    </Typography>
                    <Button onClick={modalOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid >
            <BookingModal
                date={date}
                booking={booking}
                modal={modal}
                setBookingSuccess={setBookingSuccess}
                modalClose={modalClose}
            >

            </BookingModal>
        </>
    );
};

export default Booking;