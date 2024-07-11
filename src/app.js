
const express = require('express');
const subscriberRoutes = require("./routes/subscribersRoutes");

const app = express();

//Routes for the getting the subscribers;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(subscriberRoutes);


module.exports = app;
