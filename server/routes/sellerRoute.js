import express from "express";
import { isSellerAuth, sellerLogin, sellerLogout } from "../controllers/sellerController.js";
import authSeller from "../middleware/authSeller.js";

const sellerRouter = express.Router();

//Route  - "/api/seller/login"
//Des    - for seller login
//Access - Public
//Method - POST
//Params - none
//Body   - none
sellerRouter.post("/login", sellerLogin);

//Route  - "/api/seller/is-auth"
//Des    - for seller authentication
//Access - Public
//Method - GET
//Params - none
//Body   - none
sellerRouter.get("/is-auth",authSeller, isSellerAuth);

//Route  - "/api/seller/logout"
//Des    - for seller logout
//Access - Public
//Method - GET
//Params - none
//Body   - none
sellerRouter.get("/logout", authSeller, sellerLogout);

export default sellerRouter;