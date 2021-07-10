const knex = require('../Database/db')

exports.signup = (req,res)=>{
    knex('user').insert({
        name : req.body.name, email : req.body.email, password : req.body.password
    })
    .then( ()=> {
        console.log('success')
        knex.select("*").from('user').where(
            'email', req.body.email
        ).then (()=> {
            if ( "email" == req.body.email) {
                console.log('Email is already present!')
                res.send('Email is already present!')
            } else {
                console.log('You successfully signed up!');
                res.send('You successfully signed up!');
            }
        }).catch ((err)=> {
            console.log(err);
       })
    }).catch((err)=>{
        console.log(err)
    })
}
    




