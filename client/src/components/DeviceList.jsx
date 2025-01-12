import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../main'
import { Col, Row } from 'react-bootstrap'
import DeviceItems from './DeviceItems'

const DeviceList = observer(() => {
  const {device} = useContext(Context)
  return (
    <Row className='d-flex'>
      {device.device.map(el => (
      <Col key={el.id} mt='2' lg={3}>
          <DeviceItems 
            img={el.img} 
            rating={el.rating} 
            name={el.name}
            id={el.id} 
            />
      </Col>
        ))}
    </Row>
  )
})

export default DeviceList