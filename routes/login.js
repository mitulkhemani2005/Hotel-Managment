const express = require(`express`);
const app = express();
const path = require(`path`);
const route = express.Router();
const ModelFile = require(path.join(__dirname,"../models/login.js"));
//MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`Public`));
//Routes
route.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,`../Views/login.html`))
})
route.post(`/`, async (req,res)=>{
    const enterDetail = req.body;
    const enterEmail = enterDetail.EnterEmail;
    const enterPass = enterDetail.EnterPass;
    const result = await ModelFile[0](enterEmail,enterPass);
    if (result==1) { 
        res.status(200).send({"login":"Success"});
    } else {
        res.status(400).send({"login":"Failed"});
    }
})
module.exports = route;