import PropTypes from 'prop-types';
import styles from './Signup.module.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const CreateAccount = () =>{
axios.post("https://carrinhodecontas.herokuapp.com/api/v1/users",{email: email,  password: password,  name: name},
{
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded', "Access-Control-Allow-Origin": "*", "Accept": "application/json" 
}
}
).then(response=>console.log(response))
  }
  const ButtonEnable  = () => {
    console.log(email,password,name)
    if(email==""||password==""||name==""){
      return <Button variant="primary" type="submit" disabled>
      Criar conta
    </Button>
    }
    else {
     return <Button variant="primary" onClick={e => CreateAccount()}>
      Criar conta
    </Button>
    }
  }
  return(
    <Container>
    <h1 className = "shadow-sm text-success mt-5 p-3 text-center rounded "> Insira suas informações</h1>
    <Row>
        <Col lg={5} md={6} sm={2} className="p-5 m-auto shadow-sm roundedl-lg" >
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="" value={name} onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <ButtonEnable/>
          </Form>
        </Col>
    </Row>
</Container>
  )
};

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
