# Todo Server

This is the backend server for the Todo application.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints

### Get all tasks
- **Method:** GET  
- **Endpoint:** `/todos`  
- **Description:** Fetches all todo tasks from the database.

### Get a single task
- **Method:** GET  
- **Endpoint:** `/todos/:id`  
- **Description:** Fetches a specific task using its unique ID.

### Add a new task
- **Method:** POST  
- **Endpoint:** `/todos/addtask`  
- **Description:** Adds a new task to the database.

### Update a task
- **Method:** PUT  
- **Endpoint:** `/todos/updatetask/:id`  
- **Description:** Updates an existing task using its ID.

### Delete a task
- **Method:** DELETE  
- **Endpoint:** `/todos/deletetask/:id`  
- **Description:** Deletes a task from the database using its ID.

## Running the Server

```bash
npm install
npm run dev

