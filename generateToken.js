const jwt = require("jsonwebtoken")

const jwt_key = process.env.JWT_KEY

var limit = 60 * 3 // 180 seconds
var mainS = Math.floor(Date.now() / 1000) // at this instant, ie this very second === 0 second in value
var expo = mainS + limit



 const generateToken = (id) => {
    return jwt.sign({ id }, jwt_key, {
        expiresIn: expo,
    })
}


module.exports = generateToken