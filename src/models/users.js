const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema(
    {
        user:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            unique: true        
        },
        email:{
            type: String,
            required: true,
            unique: true
        }
        },

    {
        timestamps: true
    }
    )

module.exports = mongoose.model('users', UsersSchema);
