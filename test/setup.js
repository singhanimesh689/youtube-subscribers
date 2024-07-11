// test/setup.js
const mongoose = require('mongoose');

before(async () => {
    await mongoose.connect("mongodb://localhost/subscribers", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

after(async () => {
    await mongoose.disconnect();
});
