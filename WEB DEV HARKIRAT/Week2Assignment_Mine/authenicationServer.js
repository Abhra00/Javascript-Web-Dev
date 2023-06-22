const express = require("express")
const PORT = 3000;
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false}))
// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server
var users = [];


function signUp(req, res) {
  let {firstName, lastName, email, password} = req.body;
  console.log(req.body.firstName)
  let userIsFound = false;
  for(let i = 0; i < users.length; i++) {
    if(users[i].email === email) {
      userIsFound = true;
      break;
    }
  }

  if(userIsFound) {
    res.sendStatus(404);
  } else {
    users.push({firstName, lastName, email, password})
    console.log(firstName);
    res.status(200).send("Signup successful");
  }
  
}

function login(req, res) {
  let user = req.body;
  let userIsFound = null;
  for(let i = 0; i < users.length; i++) {
    if(users[i].email === user.email && users[i].password === user.password) {
      userIsFound = users[i];
      break;
    }
  }
  console.log(userIsFound)
  if(userIsFound) {

    res.json({
      firstname : userIsFound.firstName,
      lastname : userIsFound.lastname,
      username : userIsFound.username
    });
  } else {
    res.sendStatus(401);
  }

}

function data(req, res) {
  let email = req.headers.email;
  let password = req.headers.password;
  let userFound = false;
  for(let i = 0; i < users.length; i++) {
    if(users[i].email === email && users[i].password === password) {
      userFound = true;
      break;
    }
  }
  if(userFound) {
    let usersToReturn = [];
    for(let i = 0; i < users.length; i++) {
      usersToReturn.push(
        {
          firstname : users[i].firstname,
          lastname : users[i].lastname,
          username : users[i].username,
        }
      )
    }

    res.json({users});
  } else {
    res.send(401);
  }
}



app.use('/signup', signUp);
app.use('/login', login);
app.use('/data', data);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})