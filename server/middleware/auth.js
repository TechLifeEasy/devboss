const jwt=require("jsonwebtoken");
// import mongoose from 'mongoose';

const secret = process.env.key;

const auth = async (req, res) => {
    try {
      // console.log(req.headers)
      const token = req.headers.authorization.split(" ")[1];
      
      let decodedData;
      
      decodedData = jwt.verify(token, secret);
      
      req.userId = decodedData?._id;
      
      // console.log(decodedData instanceof mongoose.Modal)
      return ;

    } catch (error) {
    // Code from the Express middleware
    }
};

exports.auth=auth;
