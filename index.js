const express = require("express");
const dotenv = require("dotenv")
const DbConnection = require('./databaseConnection')
dotenv.config();
const todoRoutes = require("./routes/todoRoutes")
const app = express();
const PORT = process.env.PORT;
DbConnection();
app.use(
    cors({
        origin:"https://todo-server-bfjv.onrender.com"
    })
)
app.use(express.json());

app.use("/todos",todoRoutes)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})