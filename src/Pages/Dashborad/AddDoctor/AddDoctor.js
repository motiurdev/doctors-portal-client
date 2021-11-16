import { Button, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if (!image) {
            alert("please Upload an Image")
            return;
        }
        const formData = new FormData();
        formData.append("name", name)
        formData.append("email", email)
        formData.append("image", image)

        fetch('https://mighty-ridge-85117.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess("Doctor added successfully")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <Box sx={{ textAlign: 'center' }}>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: "50%" }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: "50%" }}
                    label="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <Input
                    accept="image/*"
                    onChange={e => setImage(e.target.files[0])}
                    type="file" />
                <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
            {
                success && <p style={{ color: "green" }}>{success}</p>
            }
        </Box>
    );
};

export default AddDoctor;