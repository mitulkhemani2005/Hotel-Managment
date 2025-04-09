const express = require('express');
const app = express();
const login = require('./routes/login');
//Middlewares
app.use(express.static(`Public`));


app.use('/',login);
app.listen(5000,()=>{console.log(`Server is Live`)});