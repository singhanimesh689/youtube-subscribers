const router = require("express").Router();
const {getSubscribers,getSubscribersWithName,getSubscriberWithId,getError,getHome} = require("../controllers/getSubscribers")


router.get("/",getHome)
//route to get all subscribers
router.get("/subscribers",getSubscribers);

//route to get subscribers with only name and subscribed channel
router.get("/subscribers/names",getSubscribersWithName);

//route to get subscriber with an id
router.get("/subscribers/:id",getSubscriberWithId);

//route to handle error
router.use("/",getError);

module.exports =  router;