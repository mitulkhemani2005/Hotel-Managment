const path = require(`path`);
const AdminModel = require(path.join(__dirname,"../Data/AdminData"));
// console.log(`Model File is COnnected`)
async function credentialCheck(enterEmail,enterPass){
    const data = await AdminModel.find({AdminEmail:enterEmail})
    if (data.length==0){
        return 0;
    } else {
        if (enterPass == data[0].AdminPass){
            return 1;
        }
        return 0;
    }
}
module.exports = [credentialCheck]