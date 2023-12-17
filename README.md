# Проект Messenger - веб-мессенджер
[![Netlify Status](https://api.netlify.com/api/v1/badges/ddff3914-85d5-43ef-a117-80776f08789d/deploy-status)](https://app.netlify.com/sites/snazzy-concha-c6cf54/deploys)

Ссылка на проект: **[Messenger](https://snazzy-concha-c6cf54.netlify.app/)**

## 🧰 Экосистема

- `TypeScript`
- `SASS (SCSS)`
- `Vite`

## 📃 Описание интерфейса

- Страница регистрации:
  - Форма с полями `login` и `password`.
- Страница авторизации:
  - Форма с полями `first_name`, `second_name`, `login`, `email`, `password` и `phone`.
- Страница со списком чатов и лентой переписки:
  - Имя поля для ввода сообщения: `message`.
- Настройки пользователя:
  - Имена полей для изменения информации о пользователе: `first_name`, `second_name`, `display_name`, `login`, `email`, `phone`;
  - Поле для изменения аватара: `avatar`;
  - Поля для изменения пароля: `oldPassword`, `newPassword`.
- Страница `404`.
- Страница `5**`.

## 🧥 Функционал

 - Регистрация
 - Авторизация
 - Изменение данных пользователя
 - Создание чатов
 - Добавление пользователей в чат
 - Удаление пользователей из чата
 - Отправка сообщений в чат 

## Макет

**[Тык](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?type=design&node-id=1-516&mode=design&t=6SXxVYxquhrilb4G-0)**

## Список экранов

- **[Log In](https://snazzy-concha-c6cf54.netlify.app/)**
- **[Sign up](https://snazzy-concha-c6cf54.netlify.app/sign-up/)**
- **[View Profile](https://snazzy-concha-c6cf54.netlify.app/settings/)**
- **[Edit Data Profile](https://snazzy-concha-c6cf54.netlify.app/settings/edit-data/)**
- **[Edit Password Profile](https://snazzy-concha-c6cf54.netlify.app/settings/edit-password/)**
- **[Error 404](https://snazzy-concha-c6cf54.netlify.app/404/)**
- **[Error 500](https://snazzy-concha-c6cf54.netlify.app/500/)**
- **[Chat](https://snazzy-concha-c6cf54.netlify.app/messenger/)**

## 👨🏻‍💻 Развертывание проекта:

- клонировать репозиторий `git clone https://github.com/alraskalov/middle.messenger.praktikum.yandex.git`;
- установить зависимости `npm i`;
- `npm run dev` - сборка и запуск проекта в режиме разработки
- `npm run start` - сборка и запуск стабильной версии проекта
- `npm run dev` - сборка стабильной версии проекта
- `npm run test` - ESlint + TSC + Stylelint
