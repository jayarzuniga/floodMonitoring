import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Box } from "@mui/material";
import {Link} from "react-router-dom"


const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    mobileNumber: '',
    agreement: false,
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
        paddingLeft="10%"
        paddingBottom="3%"
      >
        <h1>Create Your Account</h1>
      </Box>

      <Box
        padding="0 10%"
        width="100%"
      >
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row>
            <Col>
            <Form.Group controlId="firstname" className="mb-4" >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId="lastname" className="mb-4">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            </Col>
            </Row>
          

          <Form.Group controlId="username" className="mb-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

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

          <Form.Group controlId="mobileNumber" className="mb-5">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter mobile number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="agreement" className="mb-4">
            <Form.Check
              type="checkbox"
              label={
                <span>
                  I have read and accept the {' '}
                  <a href='/terms'>Terms and Conditions</a>
                </span>
              }
              checked={formData.agreement}
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
              Sign Up
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default Register;
