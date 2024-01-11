import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReview() {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <Button onClick={() => setOpen(!open)} className='btn btn-warning'>Click here to see the Review</Button>

       <Collapse in={open}>
          <div className='mt-5'>
              <h6>name </h6>
              <p>Rating</p>
              <p>comment</p>  
          </div>
       </Collapse>
    </div>
  )
}

export default RestReview