import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState("")
    console.log("email", email);
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault()
        const user = { email }
        fetch('https://mighty-ridge-85117.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })

    }

    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />

                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin role Successfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;