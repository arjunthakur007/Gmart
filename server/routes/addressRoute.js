import express from "express";
import { addAddress, getAddress } from "../controllers/addressController.js";
import authUser from "../middleware/authUser.js";

const addressRouter = express.Router();

//Route  - "/api/address/add"
//Des    - add address
//Access - Public
//Method - POST
//Params - none
//Body   - none
addressRouter.post("/add", authUser, addAddress);

//Route  - "/api/address/get"
//Des    - get address
//Access - Public
//Method - GET
//Params - none
//Body   - none
addressRouter.get("/get", authUser, getAddress);

export default addressRouter;
