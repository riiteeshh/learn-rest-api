const express=require('express');

const feedController=require('../controlers/feed');
const { body,sanitize }=require('express-validator');



const router=express.Router();


router.get('/posts',

feedController.getposts);

router.get('/posts/:id',
feedController.getOnePost);
router.post('/posts',[
    body('title').trim().isLength({min:5}),// to validate
    body('content').trim().isLength({min:5}),
],feedController.createPost);

module.exports=router;