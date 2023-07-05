const mongoose = require("mongoose");


const connectDB = () => {
    return mongoose.connect("mongodb+srv://shanoorfb2403:J4Akfu82vtasIN8C@cluster0.pmacnrn.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
