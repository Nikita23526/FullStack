import express from "express";
 import passport from "passport";
import { myProfile , logout, getAdminUsers} from "../controllers/user.js";
import {authorizedAdmin, isAuthenticated} from "../middlewares/auth.js"

 const router = express.Router();
 
  router.get(
    "/googlelogin",
    passport.authenticate("google",{
        scope :["profile"],
    })
  );
  router.get("/login",
    passport.authenticate("google"),
    (req, res , next)=>{
      res.send("logged in");
    });
  //    passport.authenticate("google",{
  //   scope: ["profile"],
  //   successRedirect: process.env.FRONTEND_URL,
  // }))

  router.get("/me" ,isAuthenticated, myProfile)

  router.get("/logout" , logout);
  // admin routes

  router.get("/admin/users" ,isAuthenticated ,authorizedAdmin,getAdminUsers)

 export default router;