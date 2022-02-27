const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const generateToken = require("../utils/generateToken")

// To create a new user (REGISTER NEW USER).
const registerUser = asyncHandler (async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email }) // uses email to check if user already exists in DB

    if (userExists) {
        res.status(400)
        throw new Error("User already exists!")
    }

    const user = await User.create({
        name,
        email,
        password,
    })

    if (user) {
        res.status(201).json({ // server is sending back to client
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateToken(user._id) 
        })
    }
    else {
        res.status(400)
        throw new Error("Error occured!")
    }
})


// To authenticate an existing user during login (LOGIN EXISTING USER)
const authUser = asyncHandler (async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name, 
            email: user.email, 
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateToken(user._id) 
        })
    }   else {
        res.status(400)
        throw new Error("Invalid Credentials!")
    }


})

module.exports = { registerUser, authUser }