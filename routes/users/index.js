import express from 'express';
import postUser from './post.js';
import getUser from './get.js';
import deleteUser from './delete.js';
import putUser from './put.js';

const router = express.Router();
router.post('/', postUser)
router.get('/', getUser)
router.delete('/', deleteUser)
router.put('/', putUser)

export default router;