// test/subscriberController.test.js
const request = require('supertest');
const { expect } = require('chai');
const subscriberController = require('../src/controllers/getSubscribers');
const subscriberModel = require('../src/models/subscribers');
const express = require('express');
const bodyParser = require('body-parser');
require('./setup');


const app = express();
app.use(bodyParser.json());


app.get('/subscribers', subscriberController.getSubscribers);
app.get('/subscribers/names', subscriberController.getSubscribersWithName);
app.get('/subscribers/:id', subscriberController.getSubscriberWithId);
app.use('/',subscriberController.getError);

describe('Subscriber API', function(){
    it('should get all subscribers', async () => {
        const response = await request(app).get('/subscribers');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
    });

    it('should get subscribers with name and subscribed channel', async () => {
        const response = await request(app).get('/subscribers/names');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('subscribedChannel');
    });

    it('should get a subscriber by id', async () => {
        const newSubscriber = new subscriberModel({ name: 'Jane Doe', subscribedChannel: 'Tech News',subscribedDate: "2024-07-10T13:13:06.618Z" });
        const savedSubscriber = await newSubscriber.save();
        const response = await request(app).get(`/subscribers/${savedSubscriber._id}`);
        expect(response.status).to.equal(200);
        expect(response.body[0]).to.have.property('_id');
        expect(response.body[0].name).to.equal('Jane Doe');
    });

    it('should return 400 for invalid subscriber data', async () => {
        const response = await request(app)
            .get('/subscribers/234234');
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('message');
    });
});
