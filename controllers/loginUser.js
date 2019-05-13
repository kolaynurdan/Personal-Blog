const bcrypt = require('bcrypt')

const User = require('../database/models/User')

module.exports = (req, res) => {

    const { email, password } = req.body;

//kullanici bulmaya calis

User.findOne({ email }, (error, user) => {

   if(user) {
       
    //sifreyi karsilastir

     bcrypt.compare(password, user.password, (error, same) => {

        //oturumu tutulan kullanici 

        if(same){
            
            req.session.userId=user._id

            res.redirect('/')

        } else {
           
            res.redirect('/auth/login')

        }

     })

   }  else {

       return res.redirect('/auth/login')
   }

})

}