const express = require("express");
const dotenv = require("dotenv")
const DbConnection = require('./databaseConnection')
dotenv.config();
const todoRoutes = require("./routes/todoRoutes")
const app = express();
const PORT = 8000;
DbConnection();
app.use(express.json());

app.use("/todos",todoRoutes)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})