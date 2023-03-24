const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//routers
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/productCategoryRoute");
const blogCatRouter = require("./routes/blogCatRoute");
const brandRouter = require("./routes/brandRouter");
const colorRouter = require("./routes/colorRoute");
const couponRouter = require("./routes/couponRoute");
const enquiryRouter = require("./routes/enqRoute");
const uploadRouter = require("./routes/uploadRoute");

const dbConnect = require("./config/dbConnect");
const { notFound, errorHendlar } = require("./middleware/errorHandle");

//dev console log
const morgan = require("morgan");
app.use(morgan("dev"));

app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000;

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogCatRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enquiryRouter);
app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHendlar);

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});
