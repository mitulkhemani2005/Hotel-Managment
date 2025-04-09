const express = require(`express`);
const app = express();
const path = require(`path`);
const route = express.Router();
app.use(express.static(`Public`));
route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,`../Views/login.html`))
})
route.post('/',(req,res)=>{
    
})
module.exports = route;