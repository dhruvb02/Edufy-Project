//Create instance of express/server
const express = require("express");
const app = express();
require("mongoose");

//Routes import
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const resetPasswordRoutes = require("./routes/Profile");

//Connection
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

// Add this right after your require statements
console.log('=== JWT DEBUG INFO ===');
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
console.log('JWT_SECRET length:', process.env.JWT_SECRET ? process.env.JWT_SECRET.length : 0);
console.log('Environment loaded:', process.env.NODE_ENV);
console.log('=====================');

const debugRoutes = require('./routes/debug');

app.use('/api', debugRoutes);
//load all the config into dotenv instance
dotenv.config();

//PORT NO
const PORT = process.env.PORT || 4000;

//databaseconnect
database.connect();

//cloudinary connection
cloudinaryConnect();

///Middleware
//To parse json
app.use(express.json());

//To parse cookie
app.use(cookieParser());

//To allow backend to entertain req from frontend - FIXED CORS
app.use(
  cors({
    // Fixed: removed https:// from localhost (localhost doesn't use https by default)
    origin: ["http://localhost:3000", "https://localhost:3000"],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Authorisation']
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

//Mounting routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/password", resetPasswordRoutes);

//default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running",
  });
});

//Activate server
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});