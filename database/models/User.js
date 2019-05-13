const bcrypt = require('bcrypt')

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    username: {

        type: String,

        required: [true, 'Lütfen kullanici adini girin.']

    },

    email: {

        type: String,

        required: [true, 'Lütfen kullanici mail adresinizi girin.'],

        unique: true
    },

    password: {

        type: String,

        required: [true, 'Lütfen kullanici şifrenizi girin.']

    }

})

UserSchema.pre('save', function(next){
    
    const user = this

    bcrypt.hash(user.password, 10, function(error, encrypted){

        user.password = encrypted

        next()

    })

})

module.exports = mongoose.model('User', UserSchema)