import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../main'
import { Card, Col, Row } from 'react-bootstrap'

const BrandBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <Row className='d-flex'>
      {device.brands.map((brand) => (
        <Col key={brand.id} xs={6} md={4} lg={2}>
          <Card
            className='text-center'
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'dark' : 'light'}
            style={{ cursor: 'pointer' }}
          >
            {brand.name}
          </Card>
        </Col>
      ))}
    </Row>
  )
})

export default BrandBar