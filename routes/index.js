import express from 'express';
import postUser from './users/post.js';
import getUser from './users/get.js';
import deleteUser from './users/delete.js';
import updateUser from './users/update.js';

const router = express.Router();

router.post('/', postUser);
router.get('/', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;