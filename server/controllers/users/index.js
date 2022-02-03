
const {
    AddUserInDataBase,
    FindUserWithEmailAndPassWord,
    GetUsers

} = require('../../db/users/index');
const { isValid } = require('./user');


const SignUp = async (req, res) => {

    try {
        const user = req.body;
        console.log(user)
        if (!isValid(user)) return res.status(404).send('data wrong');
        const data = await AddUserInDataBase(user);
        return res.status(200).send({ info: 'User Add', data });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}


const SignIn = async (req, res) => {

    try {
        const user = req.body;
        console.log(user)
        if (!isValid(user)) return res.status(404).send('data wrong');
        const data = await FindUserWithEmailAndPassWord(user);
        return res.status(200).send({ info: 'User Add', data });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}

const Users =async (req,res) => {

    try {

        const data = await GetUsers();
        return res.status(200).send({ info: 'Users', data });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}


exports.Users = Users;
exports.SignIn = SignIn;
exports.SignUp = SignUp;
