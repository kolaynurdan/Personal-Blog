const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/testblog')




// Post.findById("5cbd9fb0ff614124a002939c", (error, post) => {

// console.log(error, post)

// })

Post.find({}, (error, posts) => {

    console.log(error, posts)

})

// Post.create({


//     title:'Benim ikinci gönderim',

//     description: 'Bu bir testtir 2',

//     content:'Lorem ipsum content.'

// }, (error, post) => {

//     console.log(error, post)

// })

// Post.findByIdAndUpdate("5cbd9fb0ff614124a002939c", {
    
//    title:'İlk blog yazım güncellendi.'

// }, (error, post) => {

//     console.log(error, post)

// })
