const jwt=require("jsonwebtoken");
var registerUser = require("../Model/newUserModel");
//Authenticating user for login(verifying token)
module.exports.verifyToken=(req,res,next)=>{
    var token;
    try{
    if('authorization' in req.headers){

        var token=req.headers["authorization"];

        if(token){
            jwt.verify(token,"tokenSecret!",(err,decode)=>{
                if (err) return res.status(404).json({ status: 404, err });
          else {
            registerUser.findOne({ _id: decode._id }).then((user, token) => {
              (req.token = token), (req.user = user), (req.userid = user._id);

              next();
            })
        }
        });
        }
    }
}
    catch (error) {
    return res.status(404).json({ status: 404, error });
  }
}