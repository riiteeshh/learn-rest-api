const mongoose=require('mongoose');

const PostSchema= new mongoose.Schema(
    {
      title: {
        type:String,
        required:true,
      },
      imageUrl:{
        type:String,
        required:false
    },
    content:{
        type:String,
        required:true
    },
    creator:{
        type:Object,
        required:false,
    }


    },
    {
        timestamps:true
    }
  
);

module.exports=mongoose.model('Post',PostSchema);