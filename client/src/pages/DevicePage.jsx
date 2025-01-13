import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = {
        id: 1,
        name: 'iPhone 12 Pro Max',
        price: 100000,
        rating: 5,
        img: 'https://storage.yandexcloud.net/itech-media/images/products/2022/9/786de063158e11ecb2c03cecef20832b_465c3607159b11ecb2c03cecef20832b.png',
        typeId: 1,
        brandId: 1,
        info: {
          screenSize: '6.5" OLED',
          processor: 'A15 Bionic',
          memory: '64GB',
        }
      }
  const description = [
    {id:1, title: 'Оперативная память', description: '5 Гб'},
    {id:2, title: 'Объем встроенной памяти', description: '64 Гб'},
    {id:3, title: 'Скорость процессора', description: 'A15 Bionic'},
    {id:4, title: 'Диагональ экрана', description: '6.5" OLED'},
  ]
  return (
    <Container className='d-flex'>
      <Row>
        <Col md={4}>
          <img src={device.img} alt={device.name} width='100%' />
        </Col>
        <Col md={4} className='mt-5'>
          <Row className='d-flex flex-column align-items-center'>
            <h3>{device.name}</h3>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4} align='center'>
          <Row
            className='d-flex flex-column aline-items-center justify-content-around mt-5'
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h4>от 100 000 руб</h4>
            <div className='d-flex justify-content-center'>
              <Button className='col-9' variant={'outline-dark'}>
                Добавить в корзину
              </Button>
            </div>
          </Row>
        </Col>
          <Row className='d-flex flex-column m-3'>
            <h2>Характеристики</h2>
            {description.map((info, index) => (
              <Row
                key={info.id}
                style={{
                  background: index % 2 === 0 ? 'lightgray' : 'transparent',
                  padding: 10,
                }}
              >
                {info.title}: {info.description}
              </Row>
            ))}
          </Row>
      </Row>
    </Container>
  )
}

export default DevicePage