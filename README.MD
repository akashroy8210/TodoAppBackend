# To-Do List App Backend

This project is a simple To-Do List backend built with Node.js, Express, and MongoDB. It provides APIs to create, read, update, delete, and search tasks.

## Prerequisites

- Node.js
- npm
- MongoDB connection string

## Setup

1. Open the project folder:

```bash
cd TodoBackend
```

2. Install dependencies:

```bash
npm install
```

3. Create or update your `.env` file with:

```env
MONGO_URL=your_mongodb_connection_string
```

## Run the App

For development:

```bash
npm run dev
```

For normal run:

```bash
npm start
```

The server runs at:

```bash
http://localhost:8000
```

## Main API Routes

- `GET /` - Home route
- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get one task by id
- `POST /tasks` - Add a new task
- `PUT /tasks/:id` - Update a task by id
- `DELETE /tasks/:id` - Delete a task by id
- `GET /tasks/search/:search` - Search tasks by title
- `GET /tasks/priority/:priority` - Search tasks by priority
- `GET /tasks/status/:status` - Search tasks by status

## Notes

- The app uses Express for routing.
- MongoDB is connected using Mongoose.
- The server port is currently set to `8000` in `index.js`.
