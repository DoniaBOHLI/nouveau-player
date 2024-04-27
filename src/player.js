import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import React from 'react'

const player= ({name, team,size, nationality, jerseyNumber, age, imageUrl}) => {  
  return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {imageUrl}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Title>{age}</Card.Title>
      <Card.Title>{size}</Card.Title>
      <Card.Text>
        {team}
      </Card.Text>
      <Card.Text>
        {nationality}
      </Card.Text><Card.Text>
        {jerseyNumber}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
</div>
  )
}
 export default player ;