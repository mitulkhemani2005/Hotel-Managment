const express = require(`express`);
const app = express();
const route = express.Router();
const path = require(`path`);

route.get('/rooms',(req,res)=>{
    res.sendFile(path.join(__dirname,"../Views/rooms.html"));
})
module.exports = route;