const express = require('express');
const router = express.Router();
const posts = require('../model/productmodel');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
//get all products
router.get('/', async (req, res) => {
    try {
        const data = await posts.find();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Failed to fetch products", error: error.message });
    }
})
//post new products
router.post('/add', async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = new posts(productData);
        const data = await newProduct.save();
        res.status(200).send({ message: "product added", product: data });
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Failed to add product", error: error.message });
    }
})
//update
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const productData = req.body;
        const data = await posts.findByIdAndUpdate(id, productData, { new: true });
        if (!data) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send({ message: "product updated", product: data });
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Failed to update product", error: error.message });
    }
})
//delete product
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await posts.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send({ message: "product deleted", product: deletedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to delete product", error: error.message });
    }
})
module.exports = router;







