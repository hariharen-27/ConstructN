const mongoose= require('mongoose');

const productSchema= mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter a product name"]
        },
        quantity:{
            type:Number,
            required:true,
            defalut:0
        },
        price:{
            type:Number,
            required:true,
        },
        image:{
            type : String,
            required:true,
        },

    },
    {
        timestamps:true 
    }
)

const product= mongoose.model('Product', productSchema);

module.exports=product;