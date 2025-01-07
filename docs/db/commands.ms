## Шпаргалка по основным командам PostgreSQL

PostgreSQL — это мощная реляционная СУБД, и знание основных команд поможет вам эффективно управлять базами данных, пользователями и правами доступа. Вот шпаргалка с основными командами.

### Подключение к PostgreSQL

- Подключение к серверу PostgreSQL как суперпользователь:
  ```bash
  sudo -u postgres psql
  ```

- Подключение к конкретной базе данных:
  ```bash
  psql -U username -d database_name
  ```

### Управление базами данных

- Создание базы данных:
  ```sql
  CREATE DATABASE database_name;
  ```

- Удаление базы данных:
  ```sql
  DROP DATABASE database_name;
  ```

- Показать все базы данных:
  ```sql
  \l
  ```

### Управление пользователями (ролями)

- Создание нового пользователя:
  ```sql
  CREATE USER username WITH PASSWORD 'password';
  ```

- Удаление пользователя:
  ```sql
  DROP USER username;
  ```

- Изменение пароля пользователя:
  ```sql
  ALTER USER username WITH PASSWORD 'new_password';
  ```

- Присвоение прав суперпользователя:
  ```sql
  ALTER USER username WITH SUPERUSER;
  ```

- Удаление прав суперпользователя:
  ```sql
  ALTER USER username WITH NOSUPERUSER;
  ```

- Показать всех пользователей:
  ```sql
  \du
  ```

### Управление правами доступа

- Присвоение всех прав на таблицу пользователю:
  ```sql
  GRANT ALL PRIVILEGES ON TABLE table_name TO username;
  ```

- Отзыв всех прав у пользователя на таблицу:
  ```sql
  REVOKE ALL PRIVILEGES ON TABLE table_name FROM username;
  ```

- Присвоение прав на создание объектов в схеме:
  ```sql
  GRANT CREATE ON SCHEMA schema_name TO username;
  ```

### Работа с таблицами

- Создание таблицы:
  ```sql
  CREATE TABLE table_name (
      column1 datatype,
      column2 datatype,
      ...
      PRIMARY KEY (column1)
  );
  ```

- Удаление таблицы:
  ```sql
  DROP TABLE table_name;
  ```

- Показать все таблицы в текущей базе данных:
  ```sql
  \dt
  ```

### Основные команды для работы с данными

- Вставка данных в таблицу:
  ```sql
  INSERT INTO table_name (column1, column2) VALUES (value1, value2);
  ```

- Обновление данных в таблице:
  ```sql
  UPDATE table_name SET column1 = value1 WHERE condition;
  ```

- Удаление данных из таблицы:
  ```sql
  DELETE FROM table_name WHERE condition;
  ```

- Выборка данных из таблицы:
  ```sql
  SELECT * FROM table_name WHERE condition;
  
   -- Или с конкретными колонками 
   SELECT column1, column2 FROM table_name WHERE condition;
   ```

### Завершение работы с PostgreSQL

- Выйти из консоли PostgreSQL:
```sql
\q
```

### Полезные команды

- Показать текущую базу данных:
```sql
SELECT current_database();
```

- Показать текущего пользователя:
```sql
SELECT current_user;
```

Эта шпаргалка охватывает основные команды для работы с PostgreSQL и поможет вам быстро ориентироваться в управлении базами данных, пользователями и правами доступа.