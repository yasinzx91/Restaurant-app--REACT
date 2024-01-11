import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestCard({item}) {
  return (
    <Link to={'/restview'} style={{textDecoration:'none'}}>
    <Card style={{width:'20rem'}} className='mt-5 border border-danger'>
  <Card.Img variant="top" height={'250px'} src={item.photograph}/>
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <hr />

    <Row>
        <Col>
          <Card.Text>
            {item.neighborhood}
          </Card.Text>
        </Col>
        <Col>
            <Card.Text className='text-end'>
                {item.cuisine_type}
            </Card.Text>
        </Col>
    </Row>


  </Card.Body>
    </Card>
</Link>
  )
}

export default RestCard