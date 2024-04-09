const jwt=require("jsonwebtoken");

//Authenticating user for login(verifying token)
module.exports.verifyToken=(req,res,next)=>{
    var token
    if('authorization' in req.headers){

        var token=req.headers["authorization"].split(" ")[1];

        if(token){
            jwt.verify(token,"tokenSecret!",(err,decode)=>{
                if(err)
                return res.status(404).json(err)
                else
                req._id=decode.id
                next();
            })
        }
    }
}