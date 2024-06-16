const User = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const postLogin = async(req, res, next) => {
    try{
        const {mail, password} = req.body;

        const userExist = await User.findOne({where :{mail : mail.toLowerCase()}});

        if (userExist && (await bcrypt.compare(password, userExist.password)))
        {
            const token = jwt.sign({ userId: userExist.id, mail: userExist.mail }, process.env.secret_key, { expiresIn: '1h' });
            return res.status(200).json(token);
        }
        return res.status(400).json('invalid');
    }
    catch(err){
        res.status(400).json(err)
    }
};


module.exports = postLogin;