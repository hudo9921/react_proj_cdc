import React from 'react';
import PropTypes from 'prop-types';
import styles from './Conta.module.css';
import { Container, Form, Button, Spinner,ListGroup } from 'react-bootstrap';
import { } from 'react-bootstrap';


const Conta = () => {
  return(
    <ListGroup>
    <ListGroup.Item>Item 1</ListGroup.Item>
    <ListGroup.Item>Item 2</ListGroup.Item>
    <ListGroup.Item>Item 3</ListGroup.Item>
    <ListGroup.Item>Item 4</ListGroup.Item>
    <ListGroup.Item>Item 5</ListGroup.Item>
  </ListGroup>
    )
};

Conta.propTypes = {};

Conta.defaultProps = {};

export default Conta;
