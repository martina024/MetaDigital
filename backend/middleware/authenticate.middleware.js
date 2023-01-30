var jwt = require('jsonwebtoken');

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decodedToken=jwt.verify(token,"masai")
        if(decodedToken){
            const userID=decodedToken.userID
            // console.log(decodedToken)
            req.body.userID=userID
            next()
        }
        else{
            res.send("please login first")
        }
    }
    else{
        res.send("please login first")
    }
}

module.exports={authenticate}