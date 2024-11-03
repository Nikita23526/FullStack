import  express from "express";
import { placeOrder ,placeOrderOnline, getMyOrders, getOrderDetails, getAdminOrders,processOrder} from "../controllers/order.js";
import {authorizedAdmin, isAuthenticated} from "../middlewares/auth.js";

const router = express.Router();

router.post("/createorder" , isAuthenticated, placeOrder);

router.post("/createorderonline",isAuthenticated,placeOrderOnline);

router.get("/myorders" , isAuthenticated, getMyOrders);

router.get("/order/:id" , isAuthenticated, getOrderDetails);

// add admin middleware
router.get("/admin/orders" , isAuthenticated, authorizedAdmin, getAdminOrders);
router.get("/admin/order/:id" , isAuthenticated, authorizedAdmin,processOrder);
export default router;