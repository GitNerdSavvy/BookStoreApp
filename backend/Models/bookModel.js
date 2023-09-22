const mongoose=require('mongoose')


const bookSchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},
technology:{
    type:String,
    required:true
},
url:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true

},
created_at: { type: Date, default: Date.now },
updated_at: { type: Date, default: Date.now },


});


module.exports=mongoose.model("Books",bookSchema);