const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    specifications: {
        General: {
            INTheBox: String,
            modelNumber: String,
            modelName: String,
        },
        displayFeatures: {
            displaySize: String,
            resolution: String,
            displayType: String,

        }

    }
});
 const Mobile=new mongoose.model('Mobile',productSchema);
 module.exports=Mobile;



