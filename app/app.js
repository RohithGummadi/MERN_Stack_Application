import dotenv from 'dotenv';
import express from 'express'
import userRoutes from '../routes/usersRoute.js';
import dbConnect from '../config/dbConnect.js';
import { globalErrHandler, notFound } from '../middlewares/globalErrHandler.js'; //{} we use this based on the export the function has
import productsRouter from '../routes/productRoute.js';
import categoriesRouter from '../routes/categoriesRouter.js';
import brandsRouter from '../routes/brandsRouter.js';

dotenv.config()
dbConnect()


const app = express();
//pass incoming data
app.use(express.json())

//routes
app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/products/", productsRouter);
app.use("/api/v1/categories/", categoriesRouter);
app.use("/api/v1/brands/", brandsRouter);


//err middlewares
app.use(notFound);
app.use(globalErrHandler);



export default app;