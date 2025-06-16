import express from "express";
import authUser from "../middleware/authUser.js";
import { getAllOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from "../controllers/orderController.js";
import authSeller from "../middleware/authSeller.js";

const orderRouter = express.Router();

//Route  - "/api/order/cod"
//Des    - place order COD
//Access - Public
//Method - POST
//Params - none
//Body   - none
orderRouter.post("/cod", authUser, placeOrderCOD )

//Route  - "/api/order/stripe"
//Des    - place order Online
//Access - Public
//Method - POST
//Params - none
//Body   - none
orderRouter.post("/stripe", authUser, placeOrderStripe )

//Route  - "/api/order/user"
//Des    - Get order by userId
//Access - Public
//Method - GET
//Params - none
//Body   - none
orderRouter.get("/user", authUser, getUserOrders )

//Route  - "/api/order/seller"
//Des    - Get all orders(for seller/admin)
//Access - Public
//Method - GET
//Params - none
//Body   - none
orderRouter.get("/seller", authSeller, getAllOrders)

export default orderRouter;