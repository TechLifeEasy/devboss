
const { UserModal } = require('../connections/Schema');
const { isFound } = require('./user');
const jwt=require("jsonwebtoken");
const bcrypt=require('bcryptjs');


const AddUserInDataBase = async (user) => {
    const isf=await isFound(user);
    if (isf) {
        throw new Error('User Name our Email exits in DataBase');
    }

    const password=await bcrypt.hash(user.password,10)


    const document = new UserModal({...user,password});
    const user_data=await document.save();

    const token = jwt.sign(JSON.stringify(user_data._doc), process.env.Secrete);

    return {...user_data._doc,token};
        

}

const GetOneUserInformationById = async (id) => {
    const data = await UserModal.findOne({ _id: id });
    return data;
}

const GetUsers = async (id) => {
    const data = await UserModal.find({});
    return data;
}

const FindUserWithEmailAndPassWord= async(user)=>{

    const {email,password}=user;

    const findEmail = await UserModal.findOne({ email })
        
    if (!findEmail) {
        throw  new Error("User not Exits");
    }


    const isPasswordSame=await bcrypt.compare(password,findEmail.password);
    
    if(!isPasswordSame){
        throw new Error("password not right");
    }

    const token = jwt.sign(JSON.stringify(findEmail._doc), process.env.Secrete);

    // console.log(token);

    return {...findEmail._doc,token:token}
}


exports.AddUserInDataBase = AddUserInDataBase;
exports.GetUsers = GetUsers;
exports.GetOneUserInformationById = GetOneUserInformationById;
exports.FindUserWithEmailAndPassWord = FindUserWithEmailAndPassWord;
