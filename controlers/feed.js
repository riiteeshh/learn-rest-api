const express=require('express');
const {validationResult}=require('express-validator');

const Posts= require('../models/post');
module.exports={
    getposts:(req,res,next)=>{

        // we should return json data
        // always return correct status
        const allPosts= Posts.find().then(

            result=>{
                return res.status(200).json({
                    posts:result,
                    status:200,
                    message:'Feed post',
                   
                });
            }
        ).catch(err=>{
            console.log(err);
        });
      
      
        
    },
    createPost:(req,res,next)=>{
        const errors =validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                message:'Validation Failed',
                errors:errors.array()
            });
        }
       
        const title=req.body.title;
        const content=req.body.content;
        
        const posts= new Posts({
            title:title,
            content:content,
            
        });
        posts.save().then(
            result=>{
                return res.status(201).json({

                    posts: result,
                    message:'Post created successfully'
                  
        
                });
            }


        ).catch(err=>console.log(err));

     
    },
    getOnePost:(req,res,next)=>{
        const postID=req.params.id;

        Posts.findById(postID).then(
            result=>{
                res.status(201).json({
                    post:result,
                    message:'Required post retrieved'
                });
            }
        ).catch(err=>{
            console.log(err);
        });


    }
}