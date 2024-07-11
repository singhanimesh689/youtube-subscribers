
const router = require("express").Router();
const {getSubscribers,getSubscribersWithName,getSubscriberWithId,getError,getHome} = require("../controllers/getSubscribers")

/**
 * @swagger
 * components:
 *   schemas:
 *     Subscriber:
 *       type: object
 *       required:
 *         - name
 *         - subscribedChannel
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the subscriber
 *         name:
 *           type: string
 *           description: The name of the subscriber
 *         subscribedChannel:
 *           type: string
 *           description: The channel the user is subscribed to
 *         subscribedDate:
 *           type: date
 *           description: The subscription date 
 *       example:
 *         id: d5fE_asz
 *         name: John Doe
 *         subscribedChannel: JohnDoeChannel
 *         subscribedDate: 2024-07-11T09:33:09.220Z
 */
router.get("/",getHome)

/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: Returns the list of all the subscribers
 *     tags: [Subscribers]
 *     responses:
 *       200:
 *         description: The list of the subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subscriber'
 */

//route to get all subscribers
router.get("/subscribers",getSubscribers);

/**
 * @swagger
 * /subscribers/names:
 *   get:
 *     summary: Returns the list of all the subscribers with name and subscribed channel
 *     tags: [Subscribers]
 *     responses:
 *       200:
 *         description: The list of the subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subscriber'
 */


//route to get subscribers with only name and subscribed channel
router.get("/subscribers/names",getSubscribersWithName);

/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     summary: Get the subscriber by id
 *     tags: [Subscribers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subscriber id
 *     responses:
 *       200:
 *         description: The subscriber description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subscriber'
 *       400:
 *         description: The subscriber was not found
 */

//route to get subscriber with an id
router.get("/subscribers/:id",getSubscriberWithId);

//route to handle error
router.use("/",getError);

module.exports =  router;