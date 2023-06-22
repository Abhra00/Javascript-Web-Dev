const express = require('express')
let bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json())
function calculateSum(counter) {
    let sum = 0;
    for(let i = 1; i <= counter; i++) {
        sum += i;
    }

    return sum;
}

function calculateMul(counter) {
    let mul = 1;;
    for(let i = 1; i <= counter; i++) {
        mul *= i;
    }

    return mul;
}


function handleFirstRequest(req, res) {
    let counter = req.query.counter;
    if(counter <= 100000) {
        let ansObj = {
            sum : calculateSum(counter)
        }
        res.send(ansObj)
    } else {
        res.status(404).send("You gave a input greater than 100000");
    }
}

function handleMulReq(req, res) {
    let counter = req.body.counter;
    if(counter <= 100000) {
        let ansObj = {
            mul : calculateMul(counter)
        }
        res.send(ansObj)
    } else {
        res.status(404).send("You gave a input greater than 100000");
    }
}

function givePage(req, res) {
    res.sendFile(__dirname + '/index.html')
}


app.get('/handleSum', handleFirstRequest)
app.get('/', givePage)
// app.post('/handleSum', handleFirstRequest)
app.post('/handleMul', handleMulReq)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



