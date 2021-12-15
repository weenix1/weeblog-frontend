import { Form, Button, Container, Card } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import "./signUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3002/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password /*  firstName, surName  */ }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("here is response", response);
      if (response.ok) {
        let data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        console.log("here is the user info", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="signup">
      <div style={{ marginTop: "150px" }}>
        <Card>
          <Form onSubmit={handleSubmit}>
            {/* <Form.Label>Lastname</Form.Label>
            <Form.Control
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              type="text"
              placeholder="Enter your surname"
            />
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter your firstname"
            /> */}
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </Container>
  );
};

export default SignUp;
