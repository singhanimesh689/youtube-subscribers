const subscriberModel = require("../models/subscribers");

//async function to get subscribers
exports.getSubscribers = async (req, res , next)=>{
    try {
        const data =await subscriberModel.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

//async function to get subcribers with name and subscribed channel
exports.getSubscribersWithName = async (req,res,next)=>{
    try {
        const data = await subscriberModel.find({},{name : 1,subscribedChannel : 1 , _id : 0});
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }   
}

//async function to get subcribers with an id
exports.getSubscriberWithId = async (req,res,next)=>{
    try {
        const data = await subscriberModel.find({_id : req.params.id});
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

//middleware to handle error
exports.getError = (error,req,res,next)=>{
    res.status(400).json({
        message : error.message
    })
}