const env = require('dotenv').config();
console.log("I am env, working");

const knex = require('knex')({
    client : "mysql",
    connection : {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        database : process.env.DB_NAME,
        password : process.env.DB_PASS
    }
})

// knex.schema.createTable('user', (table) => {
//     table.increments('id').primary()
//     table.string('name')
//     table.string('email')
//     table.string('password')
// }).then(() => {
//     console.log("knex is working")
// }).catch ((err) => {
//     console.log(err)
// }); 

// knex.schema.createTable('login', (table) => {
//     table.increments('id').primary()
//     table.string('email')
//     table.string('password')
// }).then(() => {
//     console.log("login table connected");
// }). catch ((err) => {
//     console.log(err);
// })

module.exports = knex