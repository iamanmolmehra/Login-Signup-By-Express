const express = require("express");
const { login } = require("./Routes/login");
const {signup} = require('./Routes/signup'); 
require('dotenv').config()

const app = express();
app.use(express.json())
const PORT = process.env.PORT ;

app.post('/signup', signup);
app.post('/login', login)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});


