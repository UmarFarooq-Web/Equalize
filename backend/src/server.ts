import app from "./app";
import { configDotenv } from "dotenv";
import { connectDb } from "./services/db";


const startServer = () => {

    configDotenv();
    connectDb()
    const port = process.env.PORT || 3000

    app.listen(port , ()=>{
        console.log("Server is running on port : " , port);
    })

}

startServer();