import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  return(
  <div className={styles.Login}>
    
    <Container>
        <h1 className = "shadow-sm text-success mt-5 p-3 text-center rounded "> Bem-Vindo</h1>
        <Row>
            <Col lg={5} md={6} sm={2} className="p-5 m-auto shadow-sm roundedl-lg" >
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Logar
                </Button>
                
                

              </Form>
            </Col>
        </Row>
        <Row>
          <Col lg={5} md={3} sm={1} className="p-5 m-auto shadow-sm roundedl-lg">
          <a href="/Signup">Clique aqui para criar sua conta</a>
          </Col>
        </Row>
    </Container>
    
  </div>)

};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
