### Шпаргалка по свойствам Material-UI

Material-UI (теперь известный как MUI) предоставляет мощный набор компонентов для разработки интерфейсов в стиле Material Design. Вот основные свойства и компоненты, которые помогут вам быстро освоить библиотеку.

#### Основные компоненты

1. **AppBar**
   - Используется для создания верхней панели навигации.
   - Свойства: `position`, `color`.
   - Пример:
     ```javascript
     <AppBar position="static" color="primary">
       <Toolbar>
         <Typography variant="h6">Название</Typography>
       </Toolbar>
     </AppBar>
     ```

2. **Button**
   - Кнопка для выполнения действий.
   - Свойства: `variant`, `color`, `size`, `onClick`.
   - Пример:
     ```javascript
     <Button variant="contained" color="primary">Нажми меня</Button>
     ```

3. **Typography**
   - Для отображения текста с различными стилями.
   - Свойства: `variant`, `align`, `color`.
   - Пример:
     ```javascript
     <Typography variant="h4" align="center">Заголовок</Typography>
     ```

4. **Grid**
   - Система сетки для создания адаптивных макетов.
   - Свойства: `container`, `item`, `xs`, `sm`, `md`, `lg`, `xl`.
   - Пример:
     ```javascript
     <Grid container spacing={2}>
       <Grid item xs={12} sm={6}>Колонка 1</Grid>
       <Grid item xs={12} sm={6}>Колонка 2</Grid>
     </Grid>
     ```

5. **Icon**
   - Для отображения иконок.
   - Использует SVG и может принимать цвет и размер.
   - Пример:
     ```javascript
     import HomeIcon from '@mui/icons-material/Home';
     <HomeIcon color="action" fontSize="large" />
     ```

#### Стилизация и кастомизация

1. **sx Prop**
   - Позволяет добавлять стили непосредственно к компонентам.
   - Пример:
     ```javascript
     <Button sx={{ margin: 2 }} variant="outlined">Кнопка</Button>
     ```

2. **makeStyles() и withStyles()**
   - Для создания кастомных стилей с использованием CSS-in-JS.
   - Пример с makeStyles:
     ```javascript
     const useStyles = makeStyles((theme) => ({
       button: {
         margin: theme.spacing(1),
       },
     }));
     
     const MyComponent = () => {
       const classes = useStyles();
       return <Button className={classes.button}>Кнопка</Button>;
     };
     ```

3. **ThemeProvider**
   - Позволяет применять глобальную тему к вашему приложению.
   - Пример:
     ```javascript
     import { ThemeProvider, createTheme } from '@mui/material/styles';
     
     const theme = createTheme({
       palette: {
         primary: {
           main: '#1976d2',
         },
       },
     });

     <ThemeProvider theme={theme}>
       <App />
     </ThemeProvider>
     ```

#### Дополнительные компоненты

1. **Snackbar**
   - Для отображения уведомлений.
   - Свойства: `open`, `message`, `onClose`.
   - Пример:
     ```javascript
     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
       <Alert onClose={handleClose} severity="success">Успешно!</Alert>
     </Snackbar>
     ```

2. **Dialog**
   - Модальное окно для подтверждения или ввода данных.
   - Свойства: `open`, `onClose`.
   - Пример:
     ```javascript
     <Dialog open={open} onClose={handleClose}>
       <DialogTitle>Заголовок</DialogTitle>
       <DialogContent>Содержимое</DialogContent>
       <DialogActions>
         <Button onClick={handleClose}>Закрыть</Button>
         <Button onClick={handleConfirm}>Подтвердить</Button>
       </DialogActions>
     </Dialog>
     ```

3. **Paper**
   - Для создания карточек и контейнеров с тенью.
   - Свойства: `elevation`.
   - Пример:
     ```javascript
     <Paper elevation={3}>
       Содержимое карточки
     </Paper>
     ```

#### Иконки

- Иконки можно использовать через пакет @mui/icons-material, который включает множество предустановленных иконок.
- Пример использования иконок:
  ```javascript
  import AddIcon from '@mui/icons-material/Add';
  <IconButton aria-label="add">
    <AddIcon />
  </IconButton>
  ```

### Заключение

Material-UI предлагает широкий набор компонентов и возможностей для кастомизации, что делает его отличным выбором для разработки приложений на React. Используйте эту шпаргалку как справочник по основным компонентам и их свойствам, чтобы ускорить процесс разработки вашего приложения.

Citations:
[1] https://webformyself.com/polnoe-rukovodstvo-po-react-js-material-ui/
[2] https://habr.com/ru/articles/535136/
[3] https://v4.mui.com/ru/components/icons/