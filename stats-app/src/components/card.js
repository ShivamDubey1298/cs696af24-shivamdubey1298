// CardComponent.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = ({header,text}) => {
  return (
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
