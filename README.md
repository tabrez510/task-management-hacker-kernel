# Task Management System

## Overview

This **Task Management System** is a web-based application for managing tasks assigned to users. Built with Node.js, Express, and Objection.js, it supports creating users, assigning tasks, and tracking task status with a simple and intuitive interface.

## Features

- **User Management**: Add users with name, email, and mobile information.
- **Task Management**: Assign tasks to users, specify task names, and set statuses.
- **Status Tracking**: Track task completion (e.g., Pending, Done).
- **Data Export**: Export user and task data for easy access.
- **Validation**: Real-time email and mobile number validation on both client (JavaScript) and server side (PHP).

## .env Configuration

Configure the `.env` file in the root directory with the following values:

```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=task_management_db
DB_PORT=3306
PORT=3000
```

## Environment Variables Explained

- **DB_HOST**: MySQL database hostname.
- **DB_USER**: MySQL username.
- **DB_PASSWORD**: Password for MySQL user.
- **DB_NAME**: MySQL database name.
- **DB_PORT**: Port on which MySQL runs (default `3306`).
- **PORT**: Server port for the application (default `3000`).

## Endpoints

### User Endpoints
- **GET /add-user**: Renders form for adding a new user.
- **POST /add-user**: Submits a new user to the database.

### Task Endpoints
- **GET /add-task**: Renders form for adding a new task to a user.
- **POST /add-task**: Creates a new task for a selected user.

### Data Export
- **GET /export**: Exports all user and task data as a downloadable file.

## Running the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Install dependencies:
    ```bash
    npm install
3. Start the server:
    ```bash
    npm start