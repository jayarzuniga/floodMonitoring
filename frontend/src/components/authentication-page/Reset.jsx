import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Box } from "@mui/material";
import {Link} from "react-router-dom"

const Reset = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data submitted:', formData);
  };

  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="end"
        padding="3%"
      >
        <Link to="/">Sign in to your Account</Link>
      </Box>

      <Box
        display="flex"
        paddingLeft="5%"
        paddingBottom="3%"
        flexDirection="column"
      >
        <h1>FORGOT YOUR PASSWORD?</h1>
        <p>Fear not! We'll email you instruction on how to reset your password.</p>
      </Box>

      <Box
        padding="0 10%"
        width="100%"
        height="100vh"
        justifyContent="center"
        margin="10% 0"
      >
        <Form onSubmit={handleSubmit}>
          <Container>
          
          <Form.Group controlId="email" className="mb-4">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          </Container>
          <Box
            display="flex"
            justifyContent="center"
          >
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default Reset;
