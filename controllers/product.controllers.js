import { Product } from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getProdByID = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const createProd = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateProd = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      res.status(404).json({ message: "product doesnt exist" });
    }

    const updatedProd = await Product.findById(id);
    res.status(500).json(updatedProd);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const delProd = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(404).json({ message: "product doesnt exist" });
    }

    res.status(200).json({ message: "delete sucessfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
