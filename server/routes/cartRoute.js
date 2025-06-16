import express from "express";
import authUser from "../middleware/authUser.js";
import { updateCart } from "../controllers/cartController.js";

const cartRouter = express.Router()

//Route  - "/api/cart/"
//Des    - Add product
//Access - Public
//Method - POST
//Params - none
//Body   - none
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
