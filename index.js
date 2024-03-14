import express from "express";
import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";
import router from "./routes/product.route.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", router);

// get
app.get("/", (req, res) => {
  res.send("hello from node api");
});

// post

// update

// delete

// connecting to DB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("connected to DB.");
    //if conn successfull we listen for req otherwise err is displayed in catch block.
    app.listen(3000, () => {
      console.log("running server...");
    });
  })
  .catch((error) => {
    console.log(error);
  });
