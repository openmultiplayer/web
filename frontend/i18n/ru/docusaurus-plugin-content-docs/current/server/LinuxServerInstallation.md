Вот «умный» (смысловой и аккуратно адаптированный) перевод твоего текста на русский:

---

# Установка сервера Linux

**Это подробное руководство по установке сервера open.mp на Ubuntu или другой Linux-дистрибутив на базе Debian.
Подойдёт как новичкам, так и тем, кто хочет освежить знания.**

---

## Требования

Перед началом убедитесь, что у вас есть:

* Машина с Ubuntu (рекомендуется 20.04 или новее) или другой Debian-based Linux;
* WinSCP или FileZilla для передачи файлов;
* PuTTY или SSH-доступ от хостинга;

---

## Этап 1: Подготовка окружения

### 1. Подключение по SSH

Используйте PuTTY или SSH-клиент хостинга для подключения к серверу.

### 2. Обновление системы

```bash
sudo apt update
```

```bash
sudo apt upgrade
```

---

### 3. Создание служебного пользователя

Создаём отдельную учётную запись без домашней директории:

```bash
sudo useradd -M svc-omp-server
```

---

### 4. Блокировка входа для пользователя

Запрещаем вход в систему под этой учётной записью:

```bash
sudo usermod -L svc-omp-server
```

---

### 5. Добавление вашего пользователя в группу

```bash
sudo usermod -aG svc-omp-server $USER
```

---

### 6. Создание директории сервера

```bash
sudo mkdir /opt/omp-server
```

---

### 7. Настройка прав доступа

```bash
sudo chgrp svc-omp-server /opt/omp-server
```

```bash
sudo chmod g+rwx /opt/omp-server
```

```bash
sudo chmod g+s /opt/omp-server
```

```bash
sudo chmod o-rwx /opt/omp-server
```

---

## Этап 2: Установка файлов open.mp

### 8. Переход в директорию

```bash
cd /opt/omp-server
```

---

### 9. Скачивание сервера

```bash
sudo -u svc-omp-server wget https://github.com/openmultiplayer/open.mp/releases/download/vX.X.X.XXXX/open.mp-linux-x86.tar.gz
```

---

### 10. Распаковка архива

```bash
sudo -u svc-omp-server tar -xzf open.mp-linux-x86.tar.gz
```

---

## Этап 3: Настройка и запуск сервера

### 11. Установка зависимостей

```bash
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install libatomic1 libatomic1:i386 libc6:i386 screen
```

---

### 12. Сделать сервер исполняемым

```bash
cd /opt/omp-server/Server/
sudo chmod +x omp-server
```

---

### 13. Запуск сервера

```bash
sudo -u svc-omp-server screen -dmS omp-server ./omp-server
```

---

## Этап 4: Управление сервером

### 14. Подключение к консоли

```bash
sudo -u svc-omp-server screen -r omp-server
```

Чтобы выйти из screen и оставить сервер работать:
`Ctrl + A`, затем `D`

---

### 15. Остановка сервера

Внутри консоли:

* `/exit` или `Ctrl + C`

Либо полностью завершить screen:

```bash
sudo -u svc-omp-server screen -X -S omp-server quit
```

---

### 16. Проверка работы

```bash
sudo -u svc-omp-server screen -ls
```

---

## Этап 5: Загрузка gamemode и файлов

### 17. Загрузка файлов

Используйте WinSCP или FileZilla для загрузки gamemode и скриптов в:

```
/opt/omp-server
```

Важно:
на Linux используются `.so` плагины, а не `.dll` (они только для Windows).

---

## Помощь

Если у вас остались вопросы, присоединяйтесь к Discord open.mp:
[https://discord.gg/samp](https://discord.gg/samp)

И задавайте вопросы в канале **#openmp-support**, упомянув это руководство.

---
