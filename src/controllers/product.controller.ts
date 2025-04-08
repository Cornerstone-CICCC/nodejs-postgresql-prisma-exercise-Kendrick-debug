import { Request, Response } from "express";
import { Product } from "@prisma/client";
import productModel  from "../models/product.model";
import exp from "constants";


//Get All Prodcuts
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productModel.fetchAllProducts()
        res.status(200).json(products)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "There is a problem with the server"})
    }
}



//Get Products By id
const getProductById = async (req: Request <{id: string}>, res: Response) => {
    try {
      const id = Number(req.params.id)
      const product = await productModel.fetchProductById(id)
      if(!product) {
        res.status(404).json({message: "Product Type Not Found"})
      return 
    }
    res.status(200).json(product)
    } catch (err) {
      console.error(err) 
      res.status(500).json({message: "Unable TO Fetch Products"})
    }
  }



//update By Id
  const updateProductById = async (req: Request<{id: string}>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { productName, price } = req.body
        const product = await productModel.editProductById(id, {
            productName,
            price
        })
        if (!product) {
            res.status(500).json({
                message: "product does not exists."
            })
        }
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({
            message: "Unable to update product."
        })
    }
}


  //Add New Products
  const addProduct = async (req: Request<{}, {}, Omit<Product, 'id'>>, res: Response) => {
    try {
        const { productName, price } = req.body
        const product  = await productModel.createProduct({
            productName,
            price
        })
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json({message: "Unable To Add Product"})
    }
  }


  //delete products By Id 
  const deleteProductById = async (req: Request<{ id: string}>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const product = await productModel.removeProductById(id)
        res.status(200).json(product)
    } catch (err) {
        console.error (err)
        res.status(404).json({message: "unable To Delete Product"})
    }

  }


  export default {
    getAllProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById
  }