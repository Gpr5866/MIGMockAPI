const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    "name":{ 
        type: String,
        required: true
    },
    "address" : String,
    "country": String,
    "phone_number" : String,
    "job_title": String,
    "status": Boolean
})

module.exports = mongoose.model('Post', PostSchema);