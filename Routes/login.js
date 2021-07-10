const knex = require('../Database/db');

exports.login = (req, res) => {
    knex('login').insert({
        email : req.body.email, password : req.body.password
    }).then(() => {
        console.log("success");
        knex.select("*").from('login').where(
            'email', req.body.email
        ).then(() => {
            if ('email' == undefined || 'password' == undefined){
                console.log("Email is incorrect! or check your password again");
                res.send("Email is incorrect! or check your password again")
            } else {
                console.log("You successfully logged in :)");
                res.send("You successfully logged in :)");
            }
        }). catch ((err) => {
            console.log(err);
        })
    }). catch ((err) => {
        console.log(err);
    })
}