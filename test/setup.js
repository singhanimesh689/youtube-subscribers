// test/setup.js
const mongoose = require('mongoose');
require("dotenv").config();

before(async () => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

after(async () => {
    await mongoose.disconnect();
});
