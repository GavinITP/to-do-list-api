# To Do List API

This is a simple API for managing to-do lists and tasks.
![screenshot](https://github.com/GavinITP/to-do-list-api/blob/main/Screenshot%202566-06-19%20at%2000.07.21.png?raw=true)

# Getting Started

These instructions will help you set up and run the API on your local machine.

## Prerequisites

To run this API, you need to have the following software installed:

- Node.js
- MongoDB

## Installing

1. Clone the repository:

```shell
git clone https://github.com/your-username/todo-list-api.git
```

2. Change to the project directory:

```shell
cd todo-list-api
```

3. Install the dependencies:

```shell
npm install
```

4. Create a .env file in the root directory of the project and provide the following environment variables:

```shell
PORT=3000
DB_URI=<Your MongoDB URI>
```

_Note: Modify the PORT and DB_URI values according to your requirements._

5. Start the server:

```shell
npm start
```

The API will now be running at http://localhost:3000.

# API Endpoints

## Lists

### Get all lists

- URL: /api/lists
- Method: GET
- Response:

```json
[
  {
    "_id": "listId1",
    "title": "List 1",
    "order": 1
  },
  {
    "_id": "listId2",
    "title": "List 2",
    "order": 2
  }
]
```

### Get tasks in a list

- URL: /api/lists/:listId/tasks
- Method: GET
- Response:

```json
[
  {
    "_id": "taskId1",
    "description": "Task 1",
    "dueDate": "2023-06-20",
    "order": 1,
    "list": "listId1"
  },
  {
    "_id": "taskId2",
    "description": "Task 2",
    "dueDate": "2023-06-25",
    "order": 2,
    "list": "listId2"
  }
]
```

### Create a new list

- URL: /api/lists
- Method: POST
- Request body:

```json
{
"title": "New List",
"order": 3
}
```

- Response:
```json
{
"_id": "newListId",
"title": "New List",
"order": 3
}
```

### Update a list

- URL: /api/lists/:listId
- Method: PUT
- Request body:

```json
{
  "title": "Updated List",
  "order": 4
}
```

- Response:

```json
{
  "_id": "listId1",
  "title": "Updated List",
  "order": 4
}
```

### Delete a list

- URL: /api/lists/:listId
- Method: DELETE
- Response:

```json
{
  "message": "List and associated tasks deleted successfully"
}
```

### Reorder a list

- URL: /api/lists/:listId/reorder
- Method: PUT
- Request body:

```json
{
  "newOrder": 5
}
```

- Response:

```json
{
  "_id": "listId1",
  "title": "List 1",
  "order": 5
}
```

## Tasks

### Create a new task

- URL: /api/tasks
- Method: POST
- Request body:

```json
{
  "description": "New Task",
  "dueDate": "2023-06-30",
  "order": 1,
  "listId": "listId1"
}
```

- Response:

```json
{
  "_id": "newTaskId",
  "description": "New Task",
  "dueDate": "2023-06-30",
  "order": 1,
  "list": "listId1"
}
```

### Get all tasks

- URL: /api/tasks
- Method: GET
- Response:

```json
[
  {
    "_id": "taskId1",
    "description": "Task 1",
    "dueDate": "2023-06-20",
    "order": 1,
    "list": "listId1"
  },
  {
    "_id": "taskId2",
    "description": "Task 2",
    "dueDate": "2023-06-25",
    "order": 2,
    "list": "listId1"
  }
]
```

### Get a task

- URL: /api/tasks/:taskId
- Method: GET
- Response:

```json
{
  "_id": "taskId1",
  "description": "Task 1",
  "dueDate": "2023-06-20",
  "order": 1,
  "list": "listId1"
}
```

### Update a task

- URL: /api/tasks/:taskId
- Method: PUT
- Request body:

```json
{
  "description": "Updated Task",
  "dueDate": "2023-06-25",
  "order": 2
}
```

- Response:

```json
{
  "_id": "taskId1",
  "description": "Updated Task",
  "dueDate": "2023-06-25",
  "order": 2,
  "list": "listId1"
}
```

### Delete a task

- URL: /api/tasks/:taskId
- Method: DELETE
- Response:

```json
{
  "_id": "taskId1",
  "description": "Task 1",
  "dueDate": "2023-06-20",
  "order": 1,
  "list": "listId1"
}
```

### Move a task to another list

- URL: /api/tasks/:taskId/move
- Method: PUT
- Request body:

```json
{
  "newListId": "listId2"
}
```

- Response:

```json
{
  "_id": "taskId1",
  "description": "Task 1",
  "dueDate": "2023-06-20",
  "order": 1,
  "list": "listId2"
}
```

### Reorder a task

- URL: /api/tasks/:taskId/reorder
- Method: PUT
- Request body:

```json
{
  "newOrder": 3
}
```

- Response:

```json
{
  "_id": "taskId1",
  "description": "Task 1",
  "dueDate": "2023-06-20",
  "order": 3,
  "list": "listId1"
}
```

# Built With

- Node.js
- Express
- MongoDB

# Authors

GavinITP
