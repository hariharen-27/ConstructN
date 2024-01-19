const mongoose= require('mongoose');

const geoSchema= mongoose.Schema(
    {
       
        type: {
            type: String,
            enum: ['Point', 'LineString', 'Polygon'], // Specify the GeoJSON type
            required: true
          },
          coordinates: {
            type: [[Number]], // Array of coordinates, can be Point or LineString
            required: true
          },
          properties: {
            // Additional properties if needed
            name: String
          }
        },
    {
        timestamps:true 
    }
)

const geoj= mongoose.model('geoj', geoSchema);

module.exports=geoj;