Проблема с классом `ml-2` в вашем компоненте NavBar может быть связана с тем, что вы используете Bootstrap 5, где классы для отступов изменились. Вместо `ml-2` следует использовать `ms-2`, так как `ml-` обозначает "margin-left", а в Bootstrap 5 используется система, основанная на "start" и "end" для поддержки различных направлений текста (например, для языков, читаемых справа налево).

Вот как можно исправить ваш код:

```javascript
<Button>Админ панель</Button>
<Button className='ms-2'>Выйти</Button>
```

Теперь кнопки не будут прилипать друг к другу.

## Основные свойства Bootstrap

Вот шпаргалка с основными классами и их назначением в Bootstrap:

### Отступы
- **`m-{breakpoint}-{size}`**: margin (все стороны)
- **`mt-{breakpoint}-{size}`**: margin-top
- **`mr-{breakpoint}-{size}`**: margin-right
- **`mb-{breakpoint}-{size}`**: margin-bottom
- **`ml-{breakpoint}-{size}`**: margin-left (заменить на `ms-{size}` в Bootstrap 5)
- **`mx-{breakpoint}-{size}`**: margin по горизонтали
- **`my-{breakpoint}-{size}`**: margin по вертикали

### Выравнивание
- **`text-start`**: выравнивание текста по левому краю
- **`text-center`**: выравнивание текста по центру
- **`text-end`**: выравнивание текста по правому краю

### Цвета и фоны
- **`bg-{color}`**: цвет фона
- **`text-{color}`**: цвет текста

### Кнопки
- **`btn`**: базовый класс для кнопок
- **`btn-primary`, `btn-secondary`, ...**: различные стили кнопок

### Навигация
- **`navbar`**: основной класс для навигационных панелей
- **`navbar-expand-{breakpoint}`**: определяет, когда навигация должна расширяться

### Сетки
- **`row`**: создает строку в сетке
- **`col`, `col-{size}`, `col-{size}-offset-{number}`**: создают колонки с заданной шириной
C
Эти классы позволяют легко управлять стилями и макетом вашего приложения, обеспечивая адаптивность и модульность.
<Col md={3}> - три колонки
Citations:
[1] https://ru.hexlet.io/qna/bootstrap/questions/bootstrap-navbar-ne-rabotaet
[2] https://ru.stackoverflow.com/questions/628112/%D0%9D%D0%B5-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-navbar-toggle
[3] https://stackoverflow.com/questions/65261888/bootstrap-v5-0-0-beta1-ml-auto-not-working-for-navbar
[4] https://ru.stackoverflow.com/questions/tagged/bootstrap?tab=unanswered&page=5
[5] https://itchief.ru/bootstrap/navbar-v4
[6] https://ru.hexlet.io/courses/bootstrap-basic/lessons/components/theory_unit
[7] https://www.pluralsight.com/resources/blog/guides/pull-react-bootstrap-right-navbar
[8] https://bootstrap-4.ru/docs/4.0/components/buttons/
[9] https://ru.stackoverflow.com/questions/1350686/react-bootstrap-%D0%BD%D0%B5-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-%D0%B4%D0%BB%D1%8F-react