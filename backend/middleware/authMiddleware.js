const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];

    if (!token) {
        return res.status(403).send('No token provided');
    }

    try {
        token = token.replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(token, config.secret_key);
        req.user = decoded;
        next(); 
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = verifyToken;
