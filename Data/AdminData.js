const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
mongoose.connect(`mongodb://localhost:27017/HSG`)
.then(()=>console.log(`DataBase is Connected Successfully`))
.catch(()=>console.log(`DataBase Error`));
const AdminSchema = new mongoose.Schema({
    AdminEmail:{
        type:String,
        required:true
    },
    AdminPass:{
        type:String,
        required:true
    }
})
const AdminModel = mongoose.model('Admin',AdminSchema);
//New User Entering data
// const user = async ()=>{
//     const admin = new AdminModel({AdminEmail:"admin",AdminPass:"admin"});
//     await admin.save();
// }
// user();
module.exports = AdminModel;
