var express = require('express');
var todoController = require('./controllers/todoController');

const PORT = 3000;

app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

todoController(app);

app.listen(PORT);
console.log("You are listening to " + PORT);