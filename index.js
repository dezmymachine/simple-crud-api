import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;
//create express app
const app = express();

//usemiddlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use routes
app.use("/api/products", productsRoutes);

//connect to mongoose

await mongoose
  .connect(URI)
  .then(() => console.log("Successfully conncted to database"));

//start the server
app.listen(PORT, () => {
  console.log(`app is running on port:${PORT}`);
});
