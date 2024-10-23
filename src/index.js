// require('dotenv').config({path: './env'});  --> i.e fine but it not consistent to import statement
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})




connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("Mongo db connection failes!!!", err);
    
})






// console.log(process.env.MONGODB_URI);
// /* just ek naya method h 
// import express from "express";
// const app = express();
// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERROR", error);
//             throw error            
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
            
//         })
//     }catch(error){
//         console.log("ERROR:", error);
//         throw err
        
//     }
// })*/

