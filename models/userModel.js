const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")

const userSchema = new mongoose.Schema(
    { 
        name: { 
            type: String, 
            required: true, 
            unique: true, 
        },
        email: { 
            type: String, 
            required: true, 
            unique: true, 
        },
        password: { 
            type: String, 
            required: true, 
        },
        isAdmin: { 
            type: Boolean,
            required: true,
            default: false, 
        },
    }, 
    { 
        timestamps: true, 
    },  
)

// To encrypt password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }

    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
})

// To compare entered password with db password. Decrypt db password and then compare with entered password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema) 

module.exports = User

// mongodb makes User to become users collection inside DB