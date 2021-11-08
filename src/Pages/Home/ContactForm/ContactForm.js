import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import formBg from '../../../images/appointment-bg.png'
import { Container, Typography } from '@mui/material';

const contactBg = {
    background: `url(${formBg})`,
    backgroundColor: "rgba(34, 53, 88,0.9)",
    backgroundBlendMode: "darken, luminosity"

}

const ContactForm = () => {
    return (
        <Box style={contactBg} sx={{ py: 4 }}>
            <Container>
                <Box sx={{ width: '50%', mx: "auto" }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'rgb(34, 213, 216)', textAlign: "center" }}>
                        CONTACT US
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: 4, my: 3, mb: 4, textAlign: "center", color: "white" }}>
                        Always Connect With Us
                    </Typography>
                    <Box>
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "100%", my: 2, background: "white" }}
                            defaultValue="Your Email"
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "100%", my: 2, background: "white" }}
                            defaultValue="Subject"
                            size="small"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            sx={{ width: "100%", my: 2, background: "white" }}
                            rows={4}
                            defaultValue="Your Message"
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactForm;