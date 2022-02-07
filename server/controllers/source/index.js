
const {
    AddSourceInDataBase,
    GetSourcesInDB,
    UserDataSourceInDB,
    DeleteSourceInDB

} = require('../../db/source/index');


const Sources = async (req, res) => {

    try {
       
        const data = await GetSourcesInDB();
        return res.status(200).send({ info: 'Sources', data });
    } catch (e) {
        console.log(e);
        res.status(404).send(e);
    }
}


const AddSource = async (req, res) => {

    try {
        const data_req = req.body;
        const userName=req.userName;
       
        const data = await AddSourceInDataBase(userName,data_req);
        return res.status(200).send({ info: 'Source Add', data });
    } catch (e) {
        console.log(e);
        res.status(404).send(e);
    }
}

const UpdateDataSource =async (req,res) => {

    try {

        const data = await UserDataSourceInDB(req.userName,req.body);
        return res.status(200).send({ info: 'Users', data });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}

const DeleteSource =async (req,res) => {

    try {

        console.log('call')

        const data = await DeleteSourceInDB(req.userName,req.body);
        return res.status(200).send({ info: 'Users Updated', data });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}

exports.Sources = Sources;
exports.AddSource = AddSource;
exports.UpdateDataSource = UpdateDataSource;
exports.DeleteSource=DeleteSource;
