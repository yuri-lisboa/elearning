const express = require('express')
const bodyParser = require('body-parser')
const cors = require( 'cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true }))
app.use(cors())

const getClasses = (request, response) => {
    pool.query('SELECT * FROM CLASS', (error, results) => {
        if (error) {
            return console.error('Error acquiring client', err.stack)
        }
        response.status(200).json(results.rows)
    })
}

const addClass = (request, response) => {
    const { author, title } = resquest.body

    pool.query('INSERT INTO CLASS (AUTHOR, TITLE) VALUES ($1, $2)', [author, title], 
        error => {
            if (error) {
                return console.error('Error executing query', err.stack)
            }
            response.status(201).json({ status: 'sucess', message:'Class Added.'})
    })
}

app
    .route('/class')
    //GET endpoint
    .get(getClasses)
    //POST endpoint
    .post(addClass)

//start server
app.listen(process.env.PORT || 3002, () => {
    console.log('server listening')
})