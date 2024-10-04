import React from 'react';
import { Alert, Button, CircularProgress, Snackbar, Stack, TextField } from "@mui/material";

export default function ContactMe() {
    const [loading, setLoading] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState("");
    const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");
    const access_key = process.env.REACT_APP_BANANA;

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);
    
        formData.append("access_key", "access_key");
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
    
        const data = await response.json();
        setLoading(false);
    
        if (data.success) {
            setSnackbarMessage("Form submitted successfully");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);
            event.target.reset();
        } else {
            setSnackbarMessage("An error occurred, please try again.");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };
      
    return (
        <section id="Contact" className="contact--section">
            <div>
                <h2 className="section--heading">Contact Me</h2>
                <p className="sub--title">Let's Get In Touch!</p>
            </div>
            <form
                className="contact--form--container" 
                onSubmit={onSubmit}
            >
                <Stack spacing={2}>
                    <label htmlFor="name" className="contact--label">
                        <span className="text-md">Name</span>
                        <TextField 
                            id="name" 
                            className="contact--input text-md" 
                            required 
                            fullWidth
                            name="name" 
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <TextField 
                            type="email" 
                            id="email" 
                            className="contact--input text-md" 
                            required 
                            fullWidth
                            name="replyto" 
                        />
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea 
                            id="message" 
                            className="contact--input text-md" 
                            rows="8" 
                            placeholder="Type your message..." 
                            required
                            name="message" 
                        />    
                    </label>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        className="contact--form--btn"
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={20} /> : null}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </Button>
                </Stack>
            </form>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{marginTop:"65px"}}
            >
                <Alert 
                    onClose={handleSnackbarClose} 
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </section>
    );
}
