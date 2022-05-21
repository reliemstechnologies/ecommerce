import { check ,  validationResult  }  from 'express-validator';

export const validationSignupRequest = [
    check('mobileNumber')
    .notEmpty()
    .withMessage('MobileNumber is required'),
    check('password')
    .isLength({ min:6 })
    .withMessage('Password at least 6 characters ')
]

export const validationSigninRequest = [
    check('mobileNumber')
    .notEmpty()
    .withMessage('Valid MobileNumber is required'),
    check('password')
    .isLength({ min:6 })
    .withMessage('Password at least 6 characters ')


]


export const  isRequesteValidated = (req,res,next) =>{
    const errors = validationResult(req)
    if(errors.array().length > 0 ){
        return res.status(400).json({ error: errors.array()[0].msg });
    }
    next()
}