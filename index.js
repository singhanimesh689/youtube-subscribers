const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose');
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
require("dotenv").config();
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = process.env.MONGODB_URL;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


//using swagger for api documentation

const options = {
    definition : {
        openapi : "3.0.0",
        info : {
            title : "Youtube Subscribers api doc",
            version : "1.0.0",
            description : "The YouTube-subscribers project is a Node.js application designed to manage and track subscribers of various YouTube channels. It leverages MongoDB for data storage and utilizes Express.js for handling HTTP requests and responses.",
            contact : {
                name : "Animesh",
                email : "singhanimesh689@gmail.com"
            }
        },
        servers : [
            {
                url : "https://youtube-subscribers-ij8s.onrender.com",
            },
        ],
    },
    apis: ['./routes/*.js'],
}
const specs = swaggerjsdoc(options);

app.use("/api-docs",swaggerui.serve,swaggerui.setup(specs));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
