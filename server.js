const express = require('express');
const app = express();
const login = require('./routes/login');
const rooms = require('./routes/rooms');
//Middlewares
app.use(express.static(`Public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
//routes
app.use('/',login);
app.use('/',rooms);
app.listen(5000,()=>{console.log(`Server is Live`)});