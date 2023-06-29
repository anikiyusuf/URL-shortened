// const express = require('express')
// const { register, login } = require('../controllers/userController')
// const userRouter = express.Router()

// userRouter.post('/register', register)
// userRouter.post('/login', login)




// module.exports = userRouter


const express = require('express');
const { register, login } = require('../controllers/userController');

const userRouter = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Creating a user account.
 *     description: Get user details to register.
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 6e3u142kmqmnwemqnwmn
 *                     firstName:
 *                       type: string
 *                       description: The user's firstName.
 *                       example: Yusuf
 *                     lastName:
 *                       type: string 
 *                       description: The user's lastName.
 *                       example: Aniki
 *                     email:
 *                       type: string
 *                       description: The user's email.
 *                       example: anikiyusuf99@gmail.com
 *                     password:
 *                       type: string
 *                       description: The user's password.
 *                       example: aniki12345
 */
userRouter.post('/register', register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user.
 *     description: Login with user credentials.
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 6e3u142kmqmnwemqnwmn
 *                     email:
 *                       type: string
 *                       description: The user's email.
 *                       example: anikiyusuf99@gmail.com
 *                     password:
 *                       type: string
 *                       description: The user's password.
 *                       example: aniki12345
 */
userRouter.post('/login', login);

module.exports = userRouter;