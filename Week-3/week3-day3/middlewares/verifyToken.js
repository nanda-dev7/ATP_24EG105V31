import jwt from 'jsonwebtoken'
const {verify}=jwt // verify the token we actually crated in userapi
// jsonwebtoken helps to create and verify the tokens 

// middle ware it runs before the route executes
export function verifyToken(req,res,next){
      // token verification logic 
      const token=req.cookies?.token; //?. optional chaining
      // if req from unauthorized user
      if(!token){
        return res.status(401).json({message:"Please Login"})
      }
      try{
      // if  token is existed
    const decodedToken= verify(token,'abcdef')
    console.log(decodedToken)
    // attach decodes user to req
    req.user=decodedToken
    // call next
    next();
      }catch(err){
        res.status(401).json({message:"session expired please reload to continue"})
      }
}