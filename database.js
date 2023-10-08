// Creating a database connection

// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Ananya17$",
//   database: "task_db",
// });

// Create a database

// connection.connect((err) => {
//   const createDB = "create database task_db";
//   connection.query(createDB, (err, res) => {
//     if (err) throw err;
//     console.log("Database created successfully");
//   });
// });

// Create a table in database

// connection.connect((err) => {
//   const createTable =
//     "create table tasks(id INT AUTO_INCREMENT PRIMARY KEY, date DATE, task TEXT)";
//   connection.query(createTable, (err, res) => {
//     if (err) throw err;
//     console.log("Table created successfully");
//   });
// });

// Delete table content

// connection.connect((err) => {
//   const deleteTableContent = "delete from tasks";
//   connection.query(deleteTableContent, (err, res) => {
//     if (err) throw err;
//     console.log("Table cleared successfully");
//   });
// });
