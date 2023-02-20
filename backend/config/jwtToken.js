const jwt = require("jsonwebtoken");
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRATE, { expiresIn: "1d" });
};
module.exports = generateToken;
