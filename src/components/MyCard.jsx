/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function MyCard({ title, description, imagen, tag, bg_tag }) {
  const [show, setShow] = useState(1);
  return (
    <>
      <Card className='cardss'>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant={bg_tag}>{tag}</Button>
          <button onClick={() => setShow(show + 1)} >Cambiar</button>
          <p>{show}</p>
        </Card.Body>
      </Card>

    </>
  )
}

export default MyCard;