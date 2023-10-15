
const jwt = require('jsonwebtoken')
const WorksModel = require('../models/WorksModel')

//C- Create
exports.create = async(req, res) => {
   
    try{
        let reqBody = req.body;
        let result = await WorksModel.create(reqBody)
        res.status(200).json({status:"success", data: result})

    }catch(err){
        res.status(400).json({status:"Failed", data: err.toString()})
    }
};

//Login
exports.login=async (req,res)=>{

    try{
        let email = req.body['email']
        let result= await WorksModel.find({email: email});
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
exports.read = async(req, res) => {
   
    try{
        let result = await WorksModel.find()
        res.status(200).json({status:"success", data: result})

    }catch(err){
        res.status(400).json({status:"Failed", data: err.toString()})
    }

};

//D- Delete
exports.delete = async(req, res) => {
   
    //Using async await method
    try{
        let id = req.params.id;
        let result = await WorksModel.deleteOne({_id: id})
        res.status(200).json({status:"success", data: result})

    }catch(err){
        res.status(400).json({status:"Failed", data: err.toString()})
    }

};


//U- Update
exports.update = async(req, res) => {
   
    //Using async await method
    try{
        let id = req.params.id;
        let query = {_id: id};
        let reqBody = req.body;
        let result = await WorksModel.updateOne(query, reqBody)
        res.status(200).json({status:"success", data: result})

    }catch(err){
        res.status(400).json({status:"Failed", data: err.toString()})
    }

};

