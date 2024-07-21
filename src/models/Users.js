const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema(
    {
        user:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String        
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        rol:{
            type: ['Usuario', 'Admin'],
            default: 'usuario'       
        }
        },

    {
        timestamps: true,
        versionKey: false
    }
    )

module.exports = mongoose.model('users', UsersSchema);
