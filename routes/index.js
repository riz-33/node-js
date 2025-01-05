import express from 'express';
import postUser from './users/post.js';
import getUser from './users/get.js';
import deleteUser from './users/delete.js';
import updateUser from './users/update.js';
import loginUser from './users/login.js';
import tokenVerification from '../config/token.js';

const router = express.Router();

router.post('/', postUser);
router.get('/', tokenVerification, getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.post('/login', loginUser);

export default router;