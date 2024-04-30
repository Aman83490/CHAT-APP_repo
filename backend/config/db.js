const mongoose = require("mongoose")
const URI = "mongodb+srv://ajha70227:Yoyohoneysingh@cluster0.qvrrfli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;"


const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(URI ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            family: 4
        }) 
               
        console.log(`mongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit();
    }
}

module.exports = connectDB;