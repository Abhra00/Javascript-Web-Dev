const express = require('express');
const app = express();
const port = 3000;

// Array to store users and their signup/login data
const users = [];

// Middleware to parse JSON request body
app.use(express.json());

// POST /signup - User Signup
app.post('/signup', (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  // Check if the username already exists
  if (users.some(user => user.username === username)) {
    return res.status(400).send('Username already exists');
  }

  // Generate a unique id for the new user
  const id = users.length + 1;

  // Save the user data in the array
  users.push({ id, username, password, firstName, lastName });
  console.log(req.body.firstName);

  res.status(201).send('User created successfully');
});

// POST /login - User Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user with the provided username
  const user = users.find(user => user.username === username);

  // Check if the user exists and the password is correct
  if (!user || user.password !== password) {
    return res.status(401).send('Invalid credentials');
  }
  console.log(user)

  // Return the user details
  const { id, firstName, lastName } = user;
  res.status(200).json({ id, firstName, lastName });
});

// GET /data - Fetch all user's names and ids from the server (Protected route)
app.get('/data', (req, res) => {
  const { username, password } = req.headers;

  // Check if the username and password are provided
  if (!username || !password) {
    return res.status(401).send('Username and password are required');
  }

  // Find the user with the provided username
  const user = users.find(user => user.username === username);

  // Check if the user exists and the password is correct
  if (!user || user.password !== password) {
    return res.status(401).send('Invalid credentials');
  }

  // Return the list of users' names and ids
  const userNamesAndIds = users.map(user => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName
  }));

  res.status(200).json({ users: userNamesAndIds });
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
