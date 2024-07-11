
const express = require('express');
const subscriberRoutes = require("./routes/subscribersRoutes");

const app = express();

//Routes for the getting the subscribers;

app.use(subscriberRoutes);


module.exports = app;
