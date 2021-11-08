import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ modal, modalClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth()
    const initailInfo = { patientName: user.displayName, email: user.email, phone: "" }
    const [bookingInfo, setBookingInfo] = useState(initailInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }

    const handleBookingSubmit = (e) => {
        e.preventDefault()
        // collect the date
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        fetch('https://mighty-ridge-85117.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    modalClose()
                }
            })
        // send to the server

    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modal}
            onClose={modalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={modal}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            sx={{ width: "90%", m: 1 }}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            sx={{ width: "90%", m: 1 }}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            sx={{ width: "90%", m: 1 }}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            sx={{ width: "90%", m: 1 }}
                            size="small"
                        />
                        <TextField
                            disabled
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            sx={{ width: "90%", m: 1 }}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Book</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;