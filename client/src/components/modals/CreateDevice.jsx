import React, { useContext } from 'react'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap'
import { Context } from '../../main'

const CreateDevice = ({ show, onHide }) => {
  const {device} = useContext(Context)
  return (
    <Modal
      show={show}
      // функция, которое модальное окно скрывает
      onHide={onHide}
      size='lg'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Добавить новый девайс
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
           {/* выпадающее меню */}
          <Dropdown className='mt-2'>
            <Dropdown.Toggle variant='outline-dark'>
              Выберите тип
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-2'>
            <Dropdown.Toggle variant='outline-dark'>
              Выберите бренд
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className='mt-3' placeholder={'Введите название устройства'} type='text' />
          <Form.Control className='mt-3' placeholder={'Введите стоимость устройства'} type='number' />
          <Form.Control className='mt-3' type='file' />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Закрыть
        </Button>
        <Button variant='outline-success' onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice