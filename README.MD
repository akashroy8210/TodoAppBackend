# Todo Backend

This is a simple Todo backend built with Express.js. It provides basic REST APIs to create, read, update, delete, search, and filter tasks.

## What you need to install

-Install `Node.js`
-`npm` comes with Node.js

## Install project packages

Run this inside the `TodoBackend` folder:

```bash
npm install
```

This will install:

- `express`
- `cors`
- `nodemon` for development

## Main routes

- `GET /` - Home route
- `GET /task` - Get all tasks
- `GET /task/:id` - Get task by id
- `POST /task` - Create a task
- `PUT /task/:id` - Update a task
- `DELETE /task/:id` - Delete a task
- `GET /task/status/:status` - Filter tasks by status
- `GET /task/priority/:priority` - Filter tasks by priority
- `GET /task/search/:search` - Search tasks by title

## Run the project

Start the server:

```bash
npm start
```

Run in development mode:

```bash
npm run dev
```

## Note

Task data is currently taken from `data/task.json`, so this project uses local JSON data instead of a database.
