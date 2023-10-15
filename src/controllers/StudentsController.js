
const jwt = require('jsonwebtoken')
const StudentsModel = require('../models/StudentsModel')

//C- Create
exports.createStudentProfile = async(req, res) => {
   
    try{
        let reqBody = req.body;
        let result = await StudentsModel.create(reqBody)
        res.status(200).json({status:"success", data: result})

    }catch(err){
        res.status(400).json({status:"Failed", data: err.toString()})
    }
};

//Login
exports.login=async (req,res)=>{

    try{
        let email = req.body['email']
        let password = req.body['password']

        let result= await StudentsModel.find({email: email, password: password});
        if(result.length > 0){
            // Create Token
            let Payload={
                exp:Math.floor(Date.now()/1000) + (24 * 60 * 60),
                data:req.body['email']
            }
            let token=jwt.sign(Payload,"SecretKey1234");
            res.status(200).json({status:"success",data:token})
        }
        else{
            // Login fail
            res.status(401).json({status:"failed",data:"Unauthorized!"})
        }
    }
    catch (err) {
        res.status(401).json({status:"fail",data:err.toString()})
    }
}


//R- Read
exports.readStudentProfile = async(req, res) => {
   
    try{
        let result = await StudentsModel.find()
        res.status(200).json({status:"success", data: result})

    }catch(err){
        res.status(400).json({status:"Failed", data: err.toString()})
    }

};

//D- Delete
exports.deleteStudentProfile = async(req, res) => {
   
    //Using async await method
    try{
        let id = req.params.id;
        let result = await StudentsModel.deleteOne({_id: id})
        res.status(200).json({status:"success", data: result})

    }catch(err){
        res.status(400).json({status:"Failed", data: err.toString()})
    }

};


//U- Update
exports.updateStudentProfile = async(req, res) => {
   
    //Using async await method
    try{
        let id = req.params.id;
        let query = {_id: id};
        let reqBody = req.body;
        let result = await StudentsModel.updateOne(query, reqBody)
        res.status(200).json({status:"success", data: result})

    }catch(err){
        res.status(400).json({status:"Failed", data: err.toString()})
    }

};





