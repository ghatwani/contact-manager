const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database Connected')
    }
    catch (err) {
        console.log(err);
        process.exit(1)
    }
}
module.exports=connectDB;