import React, { useContext } from 'react'
import { Context } from '../main'
import { Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import MyCard from './MyCard'

const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <Row className='d-flex'>
      {device.brands.map((el) => (
        <MyCard
          key={el.id}
          title={el.name}
          onClick={() => device.setSelectedBrand(el)} // Set selected brand on click
          border={el.id === device.setSelectedBrand?.id ? 'danger' : 'light'} 
          style={{ cursor: 'pointer' }} 
        />
      ))}
    </Row>
  )
})

export default BrandBar
