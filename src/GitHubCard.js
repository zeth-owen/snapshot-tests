import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import zeth from './zeth.jpg'

export default function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={zeth} alt="Zeth" style={{ width: '100%', height: 'auto' }} />
      <Card.Body>
        <Card.Title>zeth-owen</Card.Title>
        <Card.Text>
          Heyyy. My name is Zeth, and I am coding right now 🙂
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

