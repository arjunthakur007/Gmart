import express from "express";
import { isAuth, login, logout, register } from "../controllers/userController.js";
import authUser from "../middleware/authUser.js";

const userRouter = express.Router();

// //Route  - "/api/user/register"
//Des    - for user registeration
//Access - Public
//Method - POST
//Params - none
//Body   - none
userRouter.post("/register", register)

// //Route  - "/api/user/login"
//Des    - for user registeration
//Access - Public
//Method - POST
//Params - none
//Body   - none
userRouter.post("/login", login)

// //Route  - "/api/user/is-auth"
//Des    - for user registeration
//Access - Public
//Method - GET
//Params - none
//Body   - none
userRouter.get("/is-auth", authUser, isAuth)

// //Route  - "/api/user/logout"
//Des    - for user registeration
//Access - Public
//Method - GET
//Params - none
//Body   - none
userRouter.get("/logout", authUser, logout)

export default userRouter;