

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectID("5fb416bde793283b4507682f")}, (error,user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 25 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(users)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5fb406bea1bac569b92a8fdd") }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch task')
        }

        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(tasks)
    })

    
}) 