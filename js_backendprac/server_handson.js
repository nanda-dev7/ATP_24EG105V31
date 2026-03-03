import exp from 'express'
const product = exp()
const port = 7000

product.use(exp.json())

let pr_users = []

product.listen(port, () =>
    console.log(`Server listening on port ${port}...`)
)
 
// get 
product.get('/users', (req, res) => {
    res.json(pr_users)
})

// post 

product.post('/users', (req, res) => {
    const { id, name } = req.body
    const userExists = pr_users.find(user => user.id === id)
    if (userExists) {
        return res.json({ message: "User already exists" })
    }
    pr_users.push({ id, name })

    res.json({
        message: "User created",
        users: pr_users
    })
})
