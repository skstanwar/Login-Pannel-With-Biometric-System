
import mongoose from "mongoose";
import   "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
           
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};


export { connectDB };