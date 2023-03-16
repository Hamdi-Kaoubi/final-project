const {body,validationResult}=require('express-validator')
exports.registerValidator=[
    body('email','please enter a valid email !').isEmail(),
    body('password','the number of characters must be at least 8 characters').isLength({min:8})
]
exports.loginValidator=[
    body('email','please enter a valid email !').isEmail(),
    body('password','the number of characters must be at least 8 characters').isLength({min:8})
]
exports.validation=(req,res,next)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }else {
        next()
    }
}