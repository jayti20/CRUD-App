const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();

// Handlebars setup
app.engine("handlebars", handlebars.create({ defaultLayout: "main" }).engine);
app.set("view engine", "handlebars");

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// Database connection setup
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ananya17$",
  database: "task_db",
});

// Routes

// Home route: Fetching and rendering tasks
app.get("/", (req, res) => {
  const fetchData = "select * from tasks";
  connection.query(fetchData, (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.render("crud-ui", {
      tasks: result,
      taskToEdit: [],
      enableEditing: false,
    });
  });
});

// Add new task
app.post("/add", (req, res) => {
  const addData = "insert into tasks(date, task) Values ?";
  const dataSent = [[new Date(), req.body.task]];
  connection.query(addData, [dataSent], (err) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.redirect("/");
  });
});

// Delete task by ID
app.post("/delete/:id", (req, res) => {
  const deleteQuery = "delete from tasks where id=?";
  connection.query(deleteQuery, [req.params.id], (err) => {
    if (err) {
      console.error("Error deleting data:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.redirect("/");
  });
});

// Search tasks
app.post("/search", (req, res) => {
  const searchQuery = "select * from tasks where task LIKE ?";
  connection.query(
    searchQuery,
    [`%${req.body.search_text}%`],
    (err, result) => {
      if (err) {
        console.error("Error searching data:", err);
        return res.status(500).send("Internal Server Error");
      }
      res.render("crud-ui", {
        tasks: result,
        taskToEdit: [],
        enableEditing: false,
      });
    }
  );
});

// Edit task: Fetch the specific task to edit
app.get("/edit/:id", (req, res) => {
  const getDataToEditQuery = "select * from tasks where id=?";
  connection.query(getDataToEditQuery, [req.params.id], (err, editTask) => {
    if (err || editTask.length === 0) {
      console.error("Error fetching task to edit:", err);
      return res.redirect("/");
    }
    const getAllDataQuery = "select * from tasks";
    connection.query(getAllDataQuery, (err, allTasks) => {
      if (err) {
        console.error("Error fetching all tasks:", err);
        return res.status(500).send("Internal Server Error");
      }
      res.render("crud-ui", {
        tasks: allTasks,
        taskToEdit: editTask[0],
        enableEditing: true,
      });
    });
  });
});

// Update task
app.post("/update/:id", (req, res) => {
  const updateDataQuery = "update tasks set task=? where id=?";
  connection.query(updateDataQuery, [req.body.task, req.params.id], (err) => {
    if (err) {
      console.error("Error updating data:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.redirect("/");
  });
});

// Start server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
