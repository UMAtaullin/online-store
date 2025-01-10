Чтобы изменить расстояние логотипа "UMA" от левого края и управлять позициями других элементов в вашем приложении на Material-UI, вы можете использовать различные подходы, основанные на свойствах и компонентах библиотеки.

### Изменение расстояния логотипа

1. **Использование свойства `sx` для отступов**
   Вы можете использовать свойство `sx` для задания отступов непосредственно к компоненту `Typography`, который содержит ваш логотип. Например, чтобы добавить отступ слева, можно сделать так:

   ```javascript
   <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
     <NavLink to='/shop' style={{ color: 'white', textDecoration: 'none' }}>
       UMA
     </NavLink>
   </Typography>
   ```

   Здесь `ml: 2` добавляет левый отступ в 16 пикселей (при стандартном масштабе 8px).

2. **Использование компонента `Box`**
   Компонент `Box` позволяет задавать стили и отступы более гибко. Например:

   ```javascript
   import Box from '@mui/material/Box';

   <Box sx={{ ml: 2 }}>
     <NavLink to='/shop' style={{ color: 'white', textDecoration: 'none' }}>
       UMA
     </NavLink>
   </Box>
   ```

3. **Использование системы Grid**
   Если вы хотите более точно управлять расположением элементов, вы можете использовать компонент `Grid`. Например:

   ```javascript
   import Grid from '@mui/material/Grid';

   <Grid container alignItems="center">
     <Grid item xs={12}>
       <NavLink to='/shop' style={{ color: 'white', textDecoration: 'none' }}>
         UMA
       </NavLink>
     </Grid>
     {/* Другие элементы */}
   </Grid>
   ```

### Позиционирование других элементов

1. **Свойство `spacing` в Grid**
   Если вы используете систему сетки (Grid), вы можете задать расстояние между элементами с помощью свойства `spacing`. Например:

   ```javascript
   <Grid container spacing={2}>
     <Grid item>
       <Button color="inherit">Админ панель</Button>
     </Grid>
     <Grid item>
       <Button color="inherit">Выйти</Button>
     </Grid>
   </Grid>
   ```

   Здесь `spacing={2}` добавляет отступы между элементами в 16 пикселей.

2. **Использование компонента Stack**
   Компонент `Stack` позволяет легко управлять расстоянием между элементами в вертикальном или горизонтальном направлении:

   ```javascript
   import Stack from '@mui/material/Stack';

   <Stack direction="row" spacing={2}>
     <Button color="inherit">Админ панель</Button>
     <Button color="inherit">Выйти</Button>
   </Stack>
   ```

### Пример полного кода

Вот как может выглядеть ваш компонент NavBar с учетом всех вышеупомянутых изменений:

```javascript
import React, { useContext } from 'react';
import { Context } from '../main';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Stack from '@mui/material/Stack';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
          <NavLink to='/shop' style={{ color: 'white', textDecoration: 'none' }}>
            UMA
          </NavLink>
        </Typography>
        {user.isAuth ? (
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Админ панель</Button>
            <Button color="inherit">Выйти</Button>
          </Stack>
        ) : (
          <Button color="inherit" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default NavBar;
```

### Заключение

С помощью свойств Material-UI, таких как `sx`, компонентов `Box`, `Grid` и `Stack`, вы можете легко управлять расстоянием и позиционированием элементов в вашем приложении. Это позволяет создавать адаптивные и хорошо структурированные интерфейсы.

Citations:
[1] https://v4.mui.com/ru/customization/spacing/
[2] https://sky.pro/wiki/html/vyravnivanie-teksta-i-ikonki-v-material-ui-resheniya/
[3] https://v4.mui.com/ru/customization/theming/
[4] https://ru.stackoverflow.com/questions/tagged/material-ui