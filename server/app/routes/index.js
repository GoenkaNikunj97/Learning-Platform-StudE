const express = require('express');
const router  = express.Router();
const userRouter = require('../users/userRouter');

router.use('/user', userRouter);

module.exports = router;