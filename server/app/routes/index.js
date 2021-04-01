const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const qnaRouter = require('./qnaRouter');
const teacherCommentsRouter = require('./teacherCommentsRouter');
const commentsRouter = require('./commentRouter');
const discussionsRouter = require('./discussionRouter');
const subjectsRouter = require('./subjectRouter');

router.use('/users', userRouter);
router.use('/qna', qnaRouter);
router.use('/teacherComments', teacherCommentsRouter);
router.use('/comments', commentsRouter);
router.use('/discussions', discussionsRouter);
router.use('/subjects', subjectsRouter);

module.exports = router;