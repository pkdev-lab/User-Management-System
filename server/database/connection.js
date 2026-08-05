const mongoose = require('mongoose');
const config = require('../../config/config');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(config.mongoURI, {       
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
}

async function disconnectDB() {
    await mongoose.connection.close();

    console.log("MongoDB connection closed.");
}

module.exports = {
    connectDB,
    disconnectDB
};