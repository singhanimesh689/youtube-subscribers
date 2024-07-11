
const express = require('express');
const subscriberRoutes = require("./routes/subscribersRoutes");

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Routes for the getting the subscribers;
app.use(subscriberRoutes);


module.exports = app;
