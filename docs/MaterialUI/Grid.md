### Шпаргалка по работе с Grid2 в Material-UI

Grid2 в Material-UI (MUI) — это мощный инструмент для создания адаптивных макетов. Он использует Flexbox для управления расположением элементов и предлагает множество возможностей для настройки. Вот основные моменты, которые помогут вам переместить кнопки на правый край и управлять макетом.

#### Основные свойства Grid2

1. **Импорт компонента**
   ```javascript
   import Grid2 from '@mui/material/Grid2';
   ```

2. **Создание контейнера**
   - Используйте `container` для создания родительского элемента, который будет содержать ваши элементы.
   ```javascript
   <Grid2 container>
     {/* Элементы */}
   </Grid2>
   ```

3. **Создание элементов**
   - Каждый дочерний элемент может быть определен как элемент сетки, просто указав его как дочерний элемент контейнера.
   ```javascript
   <Grid2 item xs={6}>
     {/* Содержимое */}
   </Grid2>
   ```

4. **Управление размерами**
   - Используйте свойства `xs`, `sm`, `md`, `lg`, и `xl` для задания ширины элемента на разных размерах экрана.
   ```javascript
   <Grid2 item xs={12} sm={6} md={4}>
     {/* Содержимое */}
   </Grid2>
   ```

5. **Отступы и промежутки**
   - Используйте свойство `spacing` в контейнере для задания расстояния между элементами.
   ```javascript
   <Grid2 container spacing={2}>
     <Grid2 item xs={6}>
       {/* Элемент 1 */}
     </Grid2>
     <Grid2 item xs={6}>
       {/* Элемент 2 */}
     </Grid2>
   </Grid2>
   ```

6. **Выравнивание элементов**
   - Используйте свойства `alignItems` и `justifyContent` для управления выравниванием элементов внутри контейнера.
   ```javascript
   <Grid2 container alignItems="center" justifyContent="space-between">
     {/* Элементы */}
   </Grid2>
   ```

### Пример реализации с выравниванием кнопок

Чтобы переместить кнопки на правый край, вы можете использовать следующий подход:

```javascript
import React, { useContext } from 'react';
import { Context } from '../main';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Grid2 from '@mui/material/Grid2';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid2 container alignItems="center">
          {/* Логотип */}
          <Grid2 xs={6}>
            <Typography variant="h6" component="div">
              <NavLink to='/shop' style={{ color: 'white', textDecoration: 'none' }}>
                UMA
              </NavLink>
            </Typography>
          </Grid2>

          {/* Кнопки справа */}
          <Grid2 xs={6} container justifyContent="flex-end">
            {user.isAuth ? (
              <>
                <Button color="inherit">Админ панель</Button>
                <Button color="inherit" sx={{ ml: 1 }}>Выйти</Button>
              </>
            ) : (
              <Button color="inherit" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            )}
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
});

export default NavBar;
```

### Объяснение кода

1. **Контейнер Grid**:
   - Используется `container` для создания основного контейнера с логотипом и кнопками.

2. **Логотип**:
   - Помещен в отдельный элемент сетки (`xs={6}`), который занимает половину доступного пространства.

3. **Кнопки справа**:
   - Второй элемент сетки также имеет `xs={6}` и использует `justifyContent="flex-end"` для выравнивания кнопок по правому краю.

4. **Отступ между кнопками**:
   - Используется свойство `sx={{ ml: 1 }}` для добавления отступа между кнопками.

### Заключение

С помощью этой шпаргалки вы сможете легко управлять расположением элементов с помощью Grid2 в Material-UI, перемещая кнопки на правый край и создавая адаптивные макеты для вашего приложения.

Citations:
[1] https://mui.com/material-ui/migration/migration-grid-v2/
[2] https://themewagon.com/blog/material-ui-grid-system-mui-grid-v2-for-responsive-design/
[3] https://v4.mui.com/ru/components/grid/
[4] https://mui.com/material-ui/api/grid-2/
[5] https://mui.com/material-ui/api/grid/
[6] https://translate.google.com/translate?u=https%3A%2F%2Fthemewagon.com%2Fblog%2Fmaterial-ui-grid-system-mui-grid-v2-for-responsive-design%2F&hl=ru&sl=en&tl=ru&client=rq&prev=search
[7] https://stackblitz.com/edit/react-rgn3zf