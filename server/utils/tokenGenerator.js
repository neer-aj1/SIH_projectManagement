import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT, {
        expiresIn: '2d'
    });

    res.cookie('jwt', token, {
        httpOnly : true ,
        maxAge   : 2*24*60*60*1000,
        sameSite: 'strict',
        secure : process.env.NODE_ENV !== 'development'
    });
};

export default generateToken;