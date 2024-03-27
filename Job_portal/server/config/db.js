// const mongoose= require("mongoose")
import mongoose from "mongoose"
// import colors from "colors"
const database=async()=>{
    try{
        const cons =await mongoose.connect(`mongodb+srv://mynewuser:number1234@cluster0.dzro3qd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log(`connected to mongodb database`)
    }catch(error){
        console.log(`error in mongodb ${error}`)

    }
}

export default database
// import mongoose from "mongoose";

// const database = async () => {
//   try {
//     const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/mylogin";
//     const conn = await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log(`Connected to MongoDB at ${uri}`);
//   } catch (error) {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//     process.exit(1); // Exit with failure
//   }
// };

// export default database;
