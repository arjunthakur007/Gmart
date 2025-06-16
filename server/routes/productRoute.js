import express from "express";
import { addProduct, changeStock, productById, productList } from "../controllers/productController.js";
import { upload } from "../configs/multer.js";
import authSeller from "../middleware/authSeller.js";

const productRouter = express.Router();

//Route  - "/api/product/"
//Des    - Add product
//Access - Public
//Method - POST
//Params - none
//Body   - none
productRouter.post("/add", upload.array(["images"]), authSeller, addProduct);

//Route  - "/api/product/"
//Des    - getting all products
//Access - Public
//Method - GET
//Params - none
//Body   - none
productRouter.get("/list", productList);

//Route  - "/api/product/"
//Des    - getting a single product
//Access - Public
//Method - GET
//Params - none
//Body   - none
productRouter.get("/id", productById);

//Route  - "/api/product/"
//Des    - Add product
//Access - Public
//Method - POST
//Params - none
//Body   - none
productRouter.post("/stock",authSeller, changeStock);

export default productRouter;
