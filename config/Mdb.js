
import mongoose from "mongoose";
import   "colors";

const connectDB = async () => {
    try {
        await async function () {
           await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
        
        }
        console.log("MongoDB Connected".cyan.underline.bold);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};


export { connectDB };