const { mongoose } = require("mongoose");
mongoose.set("strictQuery", true);
const dbConnect = async () => {
    try {
        const abc = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("db connected");
    } catch (err) {
        console.log(err.message);
    }
};
module.exports = dbConnect;
