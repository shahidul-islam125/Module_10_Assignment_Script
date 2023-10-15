const jwt = require('jsonwebtoken');

module.exports = async(req,res,next)=>{
    try{
        let Token=req.headers['token'];
        let decoded =  await jwt.verify(Token,"SecretKey1234")
        if(decoded){
            next();
        }else{
            res.status(401).json({status:"Invalid token"})
        }
    }catch(err){
        res.status(401).json({status:"fail",data:err.toString()})
    }
    
}

