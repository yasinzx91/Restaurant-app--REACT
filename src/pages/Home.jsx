import React, { useEffect } from 'react'
import { Row , Col } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchrestaurant } from '../redux/restaurantSlice'

function Home() {

    const allrest = useSelector((state)=>state.restaurantSlice.allrestaurent)
    console.log(allrest);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchrestaurant())
    },[])

  return (
    
      <Row className='w-100 pt-5 px-5'>
            {allrest?.length>0?

            allrest.map(item=>(
              <Col sm={6} md={4}>
                  <RestCard item = {item}/>
              </Col>
            ))

            
            :
            <p>nothing to display</p>
            }
      </Row>
    
  )
}

export default Home