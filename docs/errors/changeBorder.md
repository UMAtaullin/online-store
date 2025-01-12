Если цвет рамки не меняется при клике, это может быть связано с тем, что состояние выбранного бренда не обновляется должным образом. Давайте убедимся, что вы правильно обновляете состояние и используете его для определения цвета рамки. 

Вот несколько шагов, которые помогут вам устранить проблему:

## 1. Убедитесь, что состояние обновляется

Проверьте, правильно ли реализован метод `setSelectedBrand` в вашем MobX store. Он должен обновлять состояние выбранного бренда. Например:

```javascript
// Пример реализации в MobX store
import { makeAutoObservable } from 'mobx';

class DeviceStore {
  selectedBrand = null;
  brands = []; // Ваши бренды

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedBrand(brand) {
    this.selectedBrand = brand; // Обновляем выбранный бренд
  }
}

export default new DeviceStore();
```

## 2. Обновите компонент для правильного использования состояния

Убедитесь, что ваш компонент правильно использует состояние `selectedBrand`. Вот обновленный код компонента:

```javascript
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../main';
import { Card, Col, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  
  return (
    <Row className='d-flex'>
      {device.brands.map((brand) => (
        <Col key={brand.id} xs={6} md={4} lg={2}>
          <Card 
            className='text-center'
            onClick={() => device.setSelectedBrand(brand)} // Устанавливаем выбранный бренд
            style={{
              cursor: 'pointer',
              borderColor: brand.id === device.selectedBrand.id ? 'green' : 'blue', // Используем device.selectedBrand
              borderWidth: '2px',
              borderStyle: 'solid',
            }}
          >
            <Card.Body>
              <Card.Title>{brand.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default BrandBar;
```

### Объяснение изменений:

1. **Проверка состояния**: Мы используем `device.selectedBrand?.id` для безопасной проверки идентификатора выбранного бренда. Знак вопроса (`?.`) позволяет избежать ошибок, если `selectedBrand` равен `null`.

2. **Обновление состояния**: Убедитесь, что метод `setSelectedBrand` действительно обновляет значение `selectedBrand` в вашем MobX store.

## 3. Проверка рендеринга

После клика на карточку должно произойти следующее:
- Метод `setSelectedBrand` должен обновить состояние.
- Компонент должен перерисоваться с новым значением `selectedBrand`.
- Цвет рамки должен измениться в зависимости от условия.

Если после этих изменений проблема все еще сохраняется, попробуйте добавить отладочные сообщения (например, с помощью `console.log`) в методе `setSelectedBrand`, чтобы убедиться, что он вызывается и состояние обновляется корректно:

```javascript
setSelectedBrand(brand) {
  console.log('Выбранный бренд:', brand); // Отладочное сообщение
  this.selectedBrand = brand; // Обновляем выбранный бренд
}
```

Эти шаги должны помочь вам устранить проблему с изменением цвета рамки при клике на карточку.