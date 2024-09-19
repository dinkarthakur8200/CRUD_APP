# MERN CRUD App

A simple **CRUD (Create, Read, Update, Delete)** application built using the **MERN** stack: **MongoDB**, **Express**, **React**, and **Node.js**. This app allows users to perform basic data management operations such as adding, viewing, editing, and deleting items from a MongoDB database.

## Features

- **Create**: Add new records to the database.
- **Read**: View existing records from the database.
- **Update**: Edit and update existing records.
- **Delete**: Remove records from the database.
- **Responsive UI**: Built with React for a dynamic, user-friendly interface.

## Tech Stack

- **Frontend**: React.js (with Axios for API calls)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose for object data modeling)
- **Server**: Express.js (Node.js)
- **RESTful API**: For communication between frontend and backend

## Prerequisites

- **Node.js** (v14+ recommended)
- **MongoDB** (local instance or cloud-based, e.g., MongoDB Atlas)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mern-crud-app.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd mern-crud-app
   ```

3. **Install server-side dependencies:**

   ```bash
   cd backend
   npm install
   ```

4. **Install client-side dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

## Configuration

1. **Backend Configuration:**

   - Rename `.env.example` to `.env`.
   - Set up your MongoDB URI in the `.env` file:

     ```env
     MONGO_URI=your_mongodb_connection_string
     ```

2. **Frontend Configuration:**

   - Ensure that API calls are pointing to the correct backend URL (check `axios` base URLs in your React project).

## Running the App

1. **Start the Backend Server:**

   ```bash
   cd backend
   npm run dev
   ```

   This will run the server on `http://localhost:5000`.

2. **Start the Frontend React App:**

   ```bash
   cd frontend
   npm start
   ```

   This will run the frontend on `http://localhost:3000`.

## API Endpoints

- **GET** `/api/items` – Retrieve all items.
- **POST** `/api/items` – Create a new item.
- **PUT** `/api/items/:id` – Update an existing item by ID.
- **DELETE** `/api/items/:id` – Delete an item by ID.

## Folder Structure

```plaintext
mern-crud-app/
 ├── backend/        # Express.js server, routes, controllers, models
 ├── frontend/       # React.js frontend, components, pages
 └── README.md       # Project documentation
```

## Contributing

Feel free to open issues or submit pull requests if you'd like to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **MERN stack** tutorials and documentation
- Community contributors for code snippets and ideas

---

