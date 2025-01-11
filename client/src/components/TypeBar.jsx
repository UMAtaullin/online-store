import { observe } from 'mobx'
import React, { useContext } from 'react'
import { Context } from '../main'
import { ListGroup } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const TypeBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
})

export default TypeBar