const express = require("express");
const connectDB = require("./src/dbConfig/connect")
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

const users_routes = require("./src/routes/users")

app.get("/", (req, res) => {
    res.send("Hi, I am live")
})

app.use("/users", users_routes);


const start = async() => {
 try {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`${PORT} Yes I am connected`)
    })
 } catch (error) {
    console.log(error)
 }
}

start()


