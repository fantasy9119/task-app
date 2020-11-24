const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


// app.use((req, res, next) => {
//     if (req.method === 'GET'){
//         res.send('You cant')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
    
//         res.status(503).send('Maintenance')
    
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5fbadc6a0dbafe426cf23cfc')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('5fbada22c16fca03b04a4b71')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)

}

main()