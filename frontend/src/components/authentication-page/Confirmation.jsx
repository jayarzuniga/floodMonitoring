import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';


const Confirmation = () => {
    const [timer, setTimer] = useState(60);
    const [showButton, setShowButton] = useState(false);

    
    useEffect(() => {
        let interval;
        if (timer > 0) {
        interval = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
        }, 1000);
        } else {
        setShowButton(true);
        clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);

    const handleResendClick = () => {
        setTimer(60);
        setShowButton(false); 
    };

    return (
    <Box
        display="flex"
        width="100%"
        height="100vh"
        flexDirection="column"
        padding="5% 20%"
    >
    
        <Box
            display="flex"
            justifyContent="end"
            paddingBottom="10%"
        >
            <Link to="/register">Sign in to Your Account</Link>
        </Box>


        <Box 
            display="flex"
            width="100%"
            height="100vh"
            flexDirection="column"
            justifyContent="center"
        >  
            <h2 style={{fontWeight: 'bolder'}}>PLEASE CONFIRM YOUR EMAIL</h2>

            <Box>
                <p>A confirmation email has been sent to the email address you provided Please check your inbox</p>
            </Box>

            <Box 
                display="flex"
                justifyContent="center"
                paddingTop="5%"
            >
                <Box>
                    {showButton ? (
                        <Button onClick={handleResendClick} variant="primary" type="submit" fullWidth>
                        Resend Confirmation
                        </Button>
                    ) : (
                        <p>Resend in {timer} seconds</p>
                    )}
                </Box>

            </Box>
        </Box>
        
    </Box>
    )
};
export default Confirmation;