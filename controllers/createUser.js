module.exports = (req, res) => {

    

    res.render('register', {

        errors: req.flash('registrationErrors'),

        data: req.flash('data')[0]

    })
    
}