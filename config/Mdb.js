import mongooes from 'mongoose';

const connectDB = async () => {
    try {
        await mongooes.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Connect to MongoDB success');
    } catch (error) {
        console.log('Connect to MongoDB fail');
        process.exit();
    }

}
export {connectDB}