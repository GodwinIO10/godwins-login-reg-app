const express = require("express")
const { registerUser, authUser } = require("../controllers/userControllers")

const router = express.Router()

router.route("/signup").post(registerUser)
router.route("/login").post(authUser)

/* I just tried this out
router.route("/login", async (req, res) => {
    res.status(200).send("Good job!")
}).get(authUser)
*/

module.exports = router