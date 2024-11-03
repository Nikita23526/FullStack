import express, { urlencoded } from "express";
import dotenv  from "dotenv";
import {connectPassport} from "./utils/provider.js"
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import {errorMiddleware} from "./middlewares/errorMiddleware.js"
import userRoute from "./routes/user.js";
import orderRoute from "./routes/order.js"

const app = express();

export default app;

dotenv.config({
    path :"./config/config.env"
});

// using middlewares

app.use(session({
    secret : process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
   
}))
app.use(cookieParser());
app.use(express.json());
app.use(
    urlencoded({
        extended: true,
    })
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());



connectPassport();






app.use("/api/v1" , userRoute)
app.use("/api/v1" , orderRoute)

// using error middleware
 app.use(errorMiddleware) 
