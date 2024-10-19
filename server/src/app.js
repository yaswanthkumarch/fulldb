// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import "./config/passportjwtconfig.js";
// import { passport } from "./config/passportjwtconfig.js";
// import { appconfig } from "./config/appconfig.js";

// const app = express();

// app.use(
//     cors({
//         origin: appconfig.APP_BASE_URL,
//         credentials: true,
//         optionsSuccessStatus: 200,
//         methods: ["GET", "POST"],
//     })
// );

// app.use(cookieParser());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));

// // Initialize Passport after body parsers and before routes
// app.use(passport.initialize());

// // Route handlers
// import { Authroutes } from "./routes/userauthRoute.js";
// //import { paymentRoutes } from "./routes/paymentRoutes.js";
// app.use("/api/v1/app/user", Authroutes);
// // app.use("/api/v1/app/user", paymentRoutes);

// export { app };



import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "./config/passportjwtconfig.js";
import { passport } from "./config/passportjwtconfig.js";
import { appconfig } from "./config/appconfig.js";

const app = express();

app.use(
    cors({
        origin: appconfig.APP_BASE_URL,
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ["GET", "POST"],
    })
);

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Initialize Passport after body parsers and before routes
app.use(passport.initialize());

// Route handlers
import { Authroutes } from "./routes/userauthRoute.js";
import { paymentRoutes } from "./routes/paymentRoutes.js"; // This should match the correct export

app.use("/api/v1/app/user", Authroutes);
app.use("/api/v1/app/user", paymentRoutes); // This should match the correct import

export { app };