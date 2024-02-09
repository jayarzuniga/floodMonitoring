import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import googleLogo from "../authentication-page/googleIcon.svg"
import {Link} from "react-router-dom"
 
const Login = () => {
  return (
    <Box
      display="flex"
      flex="2"
      padding="10%"
      width="100%"
      flexDirection='column'
      flexWrap="wrap"
      >
      <Box
        display="flex"
        justifyContent="end"
        paddingBottom="10%"
      >
        <Link to="/register">Create an Account</Link>
      </Box>

      <h1 style={{fontWeight: "600"}}>SIGN IN</h1>

      <Box
        width="100%"
      >
        <Form style={{ width: "100%" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Box 
              display="flex"
              justifyContent="space-between"
            >
            <Form.Label>Password  </Form.Label>
           <Link to="/Reset">Forgot Password</Link>
            </Box>

            <Form.Control type="password" placeholder="Password" />
          </Form.Group>


          

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="5%"
            width="100%"
          >
            <Button variant="primary" type="submit" fullWidth>
              Sign in
            </Button>
          </Box>

        </Form>
        
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingTop="10%"
          marginBottom="0"
        >
          <p style={{margin:0}}>OR</p>
        </Box>
        <hr style={{paddingBottom:"1%", margin:0}}></hr>
        <Box
          display="flex"
          justifyContent="center"
        >
        <Link to="/">
        <img
          src={googleLogo}
          alt="Google Logo"
          style={{ width: "24px", height: "24px"}}
        />
      </Link>
      </Box>
      </Box>
    </Box>
  )
}

export default Login;
