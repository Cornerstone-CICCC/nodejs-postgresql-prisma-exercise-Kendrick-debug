import { PrismaClient, Product } from "@prisma/client";


const prisma = new PrismaClient()

//fetch all Products
const fetchAllProducts = async () => {
    return await prisma.product.findMany()
}

//fetch By Id
const fetchProductById = async (id: number) => {
    return await prisma.product.findUnique({
        where: {
            id
        }
    })
}

// edit Products By Id
const editProductById = async (id: number, data: Partial<Product>) => {
    const foundProduct = await fetchProductById(id)
    if(!foundProduct) return null
    const newupdate = {
        productName: data.productName ?? foundProduct.productName,
        price: data.price ?? foundProduct.price,
    }
    return await prisma.product.update({
        where: { id },
        data: newupdate
    })
}

//Create new Product
const createProduct = async (data: Omit<Product, 'id'>) => {
    return await prisma.product.create({ data })
  }

//remove Products By id
const removeProductById =async (id: number) => {
    return await prisma.product.delete({
      where: {
        id
      }
    })
  }
  

  export default {
    fetchAllProducts,
    fetchProductById,
    editProductById,
    createProduct,
    removeProductById
  }