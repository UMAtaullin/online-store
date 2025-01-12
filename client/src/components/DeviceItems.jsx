import React from 'react'
import { Card, Image, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom' // Заменяем useHistory на useNavigate

const DeviceItems = observer((props) => {

  const navigate = useNavigate() 

  const handleClick = () => {
    navigate('/device' + '/' + props.id)
  }

  return (
    <Row className='d-flex'>
      <Card
        className='text-center mt-3 align-items-center'
        style={{ width: 150, cursor: 'pointer' }}
        border={'dark'}
        onClick={handleClick} // Добавляем обработчик клика
      >
        <Image width={150} src={props.img} />
        <div className='d-flex justify-content-between align-items-center mb-2'>
          <div className='text-black-50'>Samsung</div>
          <div className='d-flex align-items-center'>
            <div>{props.rating}</div>
            <Image width={15} height={15} src={star} />
          </div>
        </div>
        <div>{props.name}</div>
      </Card>
    </Row>
  )
})

export default DeviceItems
