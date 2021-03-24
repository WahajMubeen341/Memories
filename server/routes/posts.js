import express from 'express';
import {getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js';

const router = express.Router();

//localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost); //wasted my    two hours bcz i used 'get' instead of 'post'
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
export default router; 