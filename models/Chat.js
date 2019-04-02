const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({

    name:{
        type: String,
        required: true,
        trim:true
    },
    message:{
        type:String,
        required: true
    }

});


const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;