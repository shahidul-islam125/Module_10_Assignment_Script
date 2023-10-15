const app=require("./app");
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server running on port no : " + process.env.PORT)
})