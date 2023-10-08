# Todo App

A simple Todo web application built with Node.js and Express, using Handlebars as the templating engine and MySQL for data persistence.

## Features

- **Create Tasks:** Add new tasks with ease using a user-friendly form.
- **View Tasks:** List all your pending tasks in a tabular format.
- **Delete Tasks:** Remove tasks once they are completed or if they are no longer needed.
- **Search Tasks:** Search for specific tasks using keywords.
- **Edit Tasks:** Modify existing tasks with an intuitive editing interface.

## Tech Stack

- **Backend:** Node.js with Express.js
- **Templating:** Handlebars.js
- **Database:** MySQL
- **Middleware:** body-parser, express.static

## Setup and Running

### Prerequisites

- Node.js and npm
- MySQL server running

### Steps

1. Clone the repository:
   ```
   git clone [repository-url]
   ```

2. Navigate into the project directory:
   ```
   cd todo-app
   ```

3. Install the required npm packages:
   ```
   npm install
   ```

4. Ensure your MySQL server is running. Set up a new database named `task_db` and configure your database connection in the code.

5. Start the server:
   ```
   node [your-entry-file].js
   ```

6. Open a web browser and navigate to `http://localhost:8000` to access the application.
