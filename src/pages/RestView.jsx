import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';


function RestView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <div className='w-100 d-flex mt-5 justify-content-center'>
          
        <div className='d-flex'>
            <div>
              <img width={'400px'} src="https://i.pinimg.com/originals/06/a1/f8/06a1f8e1c6d33fc7616c91a152b06629.jpg" alt="" />
            </div>

            <div className='bg-dark d-flex flex-column justify-content-center pb-5'>
                <h1 className='text-center'>Restaurant</h1>

                <ListGroup className='mb-5 mt-5'>
                  <ListGroup.Item>
                      <h1 className='text-center'>Emily</h1>
                  </ListGroup.Item>
                  <ListGroup.Item>Neighbourhood : Brooklyn</ListGroup.Item>
                  <ListGroup.Item>Cuisine type : Pizza</ListGroup.Item>
                  <ListGroup.Item>Address : 919 Fultron St. Brooklyn, NY 11238</ListGroup.Item>
                  <ListGroup.Item className='d-flex justify-content-center align-items-start'>
                    <button className='btn btn-warning me-3' onClick={handleShow}>Operating hours</button>
                    <RestReview/>


                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                    <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      I will not close if you click outside me. Don not even try to press
                      escape key.
                    </Modal.Body>
       
                    </Modal>

                    
                  </ListGroup.Item>
                  </ListGroup>
                  
            </div>

        </div>
      
   </div>
  )
}

export default RestView