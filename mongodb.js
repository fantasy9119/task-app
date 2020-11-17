
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Fabián',
    //     age: 25
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(' Unable to insert user')
    //     }

    //     console.log(result.ops)
    //})

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gustavoql',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Clean my bedroom',
            completed: false
        }, {
            description: 'Learn new programming lenguages',
            completed: true
        }, {
            description: 'Talk to friends more',
            completed: true
        }

    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    })
}) 