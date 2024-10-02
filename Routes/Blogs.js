import express from 'express';
import createPost from "../controllers/posts/createpost.js";
import deletePost from "../controllers/posts/deletepost.js";
import updatedPost from "../controllers/posts/updatepost.js";

import createCmt from '../controllers/comments/createcmt.js';
import updatedCmt from '../controllers/comments/updatecmt.js';
import deleteCmt from '../controllers/comments/deletecmt.js';

import React from '../controllers/reacts/likepost.js';
import disLike from '../controllers/reacts/dislikepost.js';

const router = express.Router();

router.post('/createPost', createPost);
router.put('/updatePost/:id', updatedPost);  // Corrected route parameter
router.delete('/deletePost/:id', deletePost); // Corrected route parameter


router.post('/createCmt', createCmt);
router.put('/updateCmt/:id', updatedCmt);  // Corrected route parameter
router.delete('/deleteCmt/:id', deleteCmt); // Corrected route parameter

router.post('/isLiked', React);
router.put('/isdisLiked/:id', disLike);

export default router;
