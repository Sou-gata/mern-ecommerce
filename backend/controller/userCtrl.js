const User = require("../models/userModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const Coupon = require("../models/couponModel");
const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validateMongoDbId");
const generateRefreshToken = require("../config/refreshToken");
const jwt = require("jsonwebtoken");
const sendEmail = require("./emailCtrl");
const crypto = require("crypto");
const uniqid = require("uniqid");

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email });
    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json({ ...newUser._doc, success: true });
    } else {
        throw new Error("User already exist");
    }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //user exist
    const findUser = await User.findOne({ email });
    if (findUser) {
        let matchPass = await findUser.isPasswordMatched(password);
        if (matchPass) {
            const refreshToken = await generateRefreshToken(findUser?.id);
            const updateUser = await User.findByIdAndUpdate(
                findUser?._id,
                { refreshToken },
                { new: true }
            );
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 3 * 24 * 3600 * 1000,
            });
            res.json({
                _id: findUser?._id,
                firstname: findUser?.firstname,
                lastname: findUser?.lastname,
                email: findUser?.email,
                mobile: findUser?.mobile,
                token: generateToken(findUser.id),
            });
        } else {
            throw new Error("Invalid credentials");
        }
    } else {
        throw new Error("Invalid credentials");
    }
});

const updateaUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    const { firstname, lastname, email, mobile } = req.body;
    try {
        const update = await User.findByIdAndUpdate(
            _id,
            {
                firstname,
                lastname,
                email,
                mobile,
            },
            {
                new: true,
            }
        );
        res.json(update);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const getallUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getUser = await User.findById(id);
        res.json({ getUser });
    } catch (error) {
        throw new Error(error?.message);
    }
});

const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.json({ deleteUser });
    } catch (error) {
        throw new Error(error?.message);
    }
});

const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const block = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        );
        res.json(block);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const unblock = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            {
                new: true,
            }
        );
        res.json(unblock);
    } catch (error) {
        throw new Error(error?.message);
    }
});

const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) {
        throw new Error("No refresh Token in Cookie");
    }
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        throw new Error("No refresh Token in db or not matched");
    }
    jwt.verify(refreshToken, process.env.JWT_SECRATE, (err, decoded) => {
        if (err || user._id !== decoded.id) {
            throw new Error("there is some thing wrong with refresh token");
        }
        const accessToken = generateToken(user?._id);
    });
    res.json({ accessToken });
});

const logOut = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) {
        throw new Error("No refresh Token in Cookie");
    }
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        });
        res.status(204); //forbidden
    }
    await User.findByIdAndUpdate(refreshToken, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204);
});

const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    } else {
        res.json(user);
    }
});

const forgotPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("user not found with this email");
    try {
        const token = await User.createPasswordResetToken();
        await user.save();
        const resetUrl = `Hi, Please follow this link to reset your password. This link is valid till 10 minutes from now. 
        <a href='http://localhost:5000/api/user/reset-password/${token}'>Click Here</a>
        <br>
        <a href="http://localhost:5000/api/user/reset-password/${token}">
        http://localhost:5000/api/user/reset-password/${token}
        </a>`;
        const data = {
            to: email,
            subject: "Reset Password",
            text: "Password Reset Url",
            htm: resetUrl,
        };
        sendEmail(data);
        res.json(token);
    } catch (error) {
        throw new Error(error.message);
    }
});

const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.token;
    const hashToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error("Token expires, please ty again");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetToken = undefined;
    await user.save();
    res.json(user);
});

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findAdmin = await User.findOne({ email });
    if (findAdmin.role?.toLowerCase() !== "admin") {
        throw new Error("Not authorised");
    }
    if (findAdmin) {
        let matchPass = await findAdmin.isPasswordMatched(password);
        if (matchPass) {
            const refreshToken = await generateRefreshToken(findAdmin?.id);
            await User.findByIdAndUpdate(
                findAdmin?._id,
                { refreshToken },
                { new: true }
            );
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 3 * 24 * 3600 * 1000,
            });
            res.json({
                _id: findAdmin?._id,
                firstname: findAdmin?.firstname,
                lastname: findAdmin?.lastname,
                email: findAdmin?.email,
                mobile: findAdmin?.mobile,
                token: generateToken(findAdmin.id),
            });
        } else {
            throw new Error("Invalid credentials");
        }
    } else {
        throw new Error("Invalid credentials");
    }
});

const getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const findUser = await User.findById(_id).populate("wishlist");
        res.json(findUser);
    } catch (error) {
        throw new Error(error.message);
    }
});

const saveAddress = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    const { address } = req.body;
    try {
        const update = await User.findByIdAndUpdate(
            _id,
            {
                address,
            },
            {
                new: true,
            }
        );
        res.json(update);
    } catch (error) {
        throw new Error(error.message);
    }
});

const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        let products = [];
        const user = await User.findById(_id);
        const alreadyExistCart = await Cart.findOne({ orderby: user._id });
        if (alreadyExistCart) {
            alreadyExistCart.remove();
        }
        for (let i = 0; i < cart.length; i++) {
            let object = {};
            object.product = cart[i]?._id;
            object.count = cart[i]?.count;
            object.color = cart[i]?.color;
            let getPrice = await Product.findById(cart[i]._id)
                .select("price")
                .exec();
            object.price = getPrice.price;
            products.push(object);
        }
        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count;
        }
        let newCart = await new Cart({
            products,
            cartTotal,
            orderby: user._id,
        }).save();
        res.json(newCart);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        const cart = await Cart.findOne({ orderby: _id }).populate(
            "products.product"
        );
        res.json(cart);
    } catch (error) {
        throw new Error(error.message);
    }
});

const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        const user = await User.findOne({ _id });
        const cart = await Cart.findOneAndRemove({ orderby: user._id });
        res.json(cart);
    } catch (error) {
        throw new Error(error.message);
    }
});

const applyCoupon = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    const { coupon } = req.body;
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (validCoupon === null) {
        throw new Error("Invalid Coupon");
    }
    const user = await User.findOne({ _id });
    let { products, cartTotal } = await Cart.findOne({
        orderby: user._id,
    }).populate("products.product");
    let totalAfterDiscount = (
        cartTotal -
        (cartTotal * validCoupon.discount) / 100
    ).toFixed(2);
    await Cart.findOneAndUpdate(
        { orderby: user._id },
        { totalAfterDiscount },
        { new: true }
    );
    res.json(totalAfterDiscount);
});

const createOrder = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    const { COD, couponApplied } = req.body;
    try {
        if (!COD) throw new Error("Cash on delevaty Faild");
        const user = await User.findById(_id);
        let userCart = await Cart.findOne({ orderby: user._id });
        let finalAmount = 0;
        if (couponApplied && userCart.totalAfterDiscount) {
            finalAmount = userCart.totalAfterDiscount;
        } else {
            finalAmount = userCart.cartTotal;
        }
        await new Order({
            products: userCart.products,
            paymentIntent: {
                id: uniqid(),
                method: "COD",
                amount: finalAmount,
                status: "Cash on Delivery",
                created: Date.now(),
                currency: "usd",
            },
            orderby: user._id,
        }).save();
        let update = userCart.products.map((item) => {
            return {
                updateOne: {
                    filter: {
                        _id: item.product._id,
                    },
                    update: {
                        $inc: {
                            quantity: -item.count,
                            sold: +item.count,
                        },
                    },
                },
            };
        });
        const updated = await Product.bulkWrite(update, {});
        res.json({ ...updated, message: "success" });
    } catch (error) {
        throw new Error(error.message);
    }
});

const getOrder = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        const userOrders = await Order.findOne({ orderby: _id }).populate(
            "products.product"
        );
        res.json(userOrders);
    } catch (error) {
        throw new Error(error.message);
    }
});

const updateOrderStatus = asyncHandler(async (req, res) => {
    let { status, trackingId, trackingAddress } = req.body;
    const { id } = req.params;
    validateMongoDbId(id);
    if (trackingId === undefined) trackingId = null;
    if (trackingAddress === undefined) trackingAddress = null;
    let data = {
        orderStatus: status,
        trackingId: trackingId,
        trackingAddress: trackingAddress,
    };
    console.log(data);
    try {
        const updateOrderStaus = await Order.findByIdAndUpdate(
            id,
            data,

            {
                new: true,
            }
        );
        res.json(updateOrderStaus);
    } catch (error) {
        throw new Error(error.message);
    }
});

const getSingleOrder = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const order = await Order.findById(id)
            .populate("products.product")
            .populate("orderby");
        res.json(order);
    } catch (error) {
        throw new Error(error.message);
    }
});
const getOrders = asyncHandler(async (req, res) => {
    try {
        const allOrder = await Order.find()
            .populate("products.product")
            .populate("orderby");
        res.json(allOrder);
    } catch (error) {
        throw new Error(error.message);
    }
});
const verifyLogin = asyncHandler(async (req, res) => {
    const { token } = req.body;
    try {
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRATE);
            const user = await User.findById(decoded?.id);
            const isAdmin = user?.role
                ? user?.role?.toLowerCase() === "admin"
                : false;
            if (user) {
                if (isAdmin) {
                    res.json({ success: true, isAdmin });
                } else {
                    res.json({ success: true });
                }
            } else {
                res.json({ success: false });
            }
        }
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = {
    createUser,
    loginUserCtrl,
    getallUser,
    getaUser,
    deleteaUser,
    updateaUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logOut,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrder,
    updateOrderStatus,
    getOrders,
    getSingleOrder,
    verifyLogin,
};
