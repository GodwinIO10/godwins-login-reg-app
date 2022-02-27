const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const port = process.env.PORT || 5000
const userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")


app.use(cors())
app.use(express.json()) // allows the server to accept json in the body of a request
connectDB()


app.get("/", (req, res) => {
    // route to confirm API server status is healthy
    res.status(200).send({ code: 201, message: "API is running" })
})


app.use("/api/users", userRoutes)


app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})