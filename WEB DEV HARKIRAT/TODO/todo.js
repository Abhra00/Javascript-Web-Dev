const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
   fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(data));
  });
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description
  };
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

function findIndex(todos, id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      return i;
    }
  }
  return -1;
}
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile("todos.json", "utf8", (err, data) => {
    if(err) {
      throw err;
    }
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, id);
    if(todoIndex === -1) {
      res.status(404).send();
    } else {
      todos.splice(todoIndex, 1);
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(200).send();
    });
    }

  });
});

// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});
app.listen(3000);