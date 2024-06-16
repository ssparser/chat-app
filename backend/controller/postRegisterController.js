const User = require('../model/userModel'); 
const bcrypt = require('bcryptjs');

const postRegister = async (req, res, next) => {
    const { username, password, mail } = req.body;

    try {
        const userExist = await User.findOne({
            where: { mail }
        });
        if (userExist) {
            return res.status(409).json({ message: 'Mail already exists' });
        }

        const hashedPass = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            username: username,
            password: hashedPass,
            mail: mail
        });
        res.status(200).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
};

module.exports = postRegister;
