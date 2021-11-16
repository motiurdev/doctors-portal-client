import { Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvuBFJJEcOTRowMK8lLWqymWT7HWDHzSC1CCwGNbf4ys1rJlqVj6RECfdBIdwJs3LyitjTVT5bm9Unn6OMsjP0a00lCS8kp5W');

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})

    useEffect(() => {
        fetch(`https://mighty-ridge-85117.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <Typography sx={{ textAlign: 'center' }} variant="h4">Please pay: {appointment.patientName} for {appointment.serviceName}</Typography>

            <Typography sx={{ py: 5 }} variant="h5">Price: ${appointment.price}</Typography>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;