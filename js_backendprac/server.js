// Create http server
import exp from 'express'
const app = exp() // created a var name to hold the express

// use body body parser middleware
app.use(exp.json())   // fixed (removed /)

// set a port number
const port = 3000;
app.listen(port, () => console.log(`server listening port number ${port}...`)); // it assign the port num to http server


// Test Data{ in future we use instead test data we use database}
let users = []


// create USER API (REST API) rest={representational state transfer}
// structure of route is app.method(path,request handler)
// Route to handle GET req of Client(http://localhost:3000/users)

// json method converts the js to json empty browser can make default to get request
// for all the rem req we have to use testing tools or client side servers
app.get('/users', (req, res) => {
    // read all users and send response
    res.json(users)
})


// Route to handle POST req of Client
// get user from client
// push user into users
// send 
app.post('/users', (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.json({ message: "User created" })
})


// Route to handle PUT  request of Client
app.put('/users', (req, res) => {

    // get modified user form client{}
    let modifiedUser = req.body;

    // get index of existing user in users array
    let index = users.findIndex(userObj => userObj.id === modifiedUser.id)

    // if user not found 
    if (index === -1) {
        return res.json({ message: "User not found" })
    }

    users.splice(index, 1, modifiedUser)

    // send res
    res.json({ message: "User updated" })
})


// Route to handle Delete request of Client
app.delete('/users/:id', (req, res) => {       // id is url parameter : it differetiate the users to id

    // get id of user from url parameter
    // when client pass through url it automatic convert it  string
    let idofUrl = Number(req.params.id)

    // find index of user
    let index = users.findIndex(userObj => userObj.id === idofUrl)

    if (index === -1) {
        return res.json({ message: "User is not found" })
    }

    // delete user by index
    users.splice(index, 1)

    // send res
    res.json({ message: "User is removed" })
})


// Route to read user by id
app.get("/users/:id", (req, res) => {

    let idofUrl = Number(req.params.id)

    // find user
    let user = users.find(userObj => userObj.id === idofUrl)

    // if user is not found 
    if (user === undefined) {
        return res.json({ message: "Users not found" })
    }

    // send user data
    res.json(user)
})













