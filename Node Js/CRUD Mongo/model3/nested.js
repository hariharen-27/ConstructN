const mongoose= require('mongoose');

const nestedSchema= mongoose.Schema(
    {
       name:{
        type:String
       },
       country:{
        type:String
       },
       city:{
        type:String
       },
       
       location:{
        type:{
            type:String
        },
        coordinates:[Number]
       },
       students:[{
        year:{
            type:String
        },
        num:{
            type:Number
        }
       }]

        },
    {
        timestamps:true 
    }
)

const nested= mongoose.model('nest', nestedSchema);

module.exports=nested;