import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

//CREATE PRODUCT

async function createProduct(data){

    return prisma.productos.create({

        data:data

    })

}

// GET PRODUCTS

async function getAllProducts(){

    return prisma.productos.findMany()
}

// GET PRODUCTS BY ID

async function getProduct(id_product){

    return prisma.productos.findUnique({
      
        where:{
            
            id: id_product
        }
    })
}

// UPDATE PRODUCTS

async function updateProduct(id_product, producto ,precio ,cantidad){

    return prisma.productos.update({
      
        where:{

            id: id_product
        },

        data:{
            
            producto: producto,
            precio: precio,
            cantidad: cantidad,
        }
    })
}

// DELETE PRODUCTS

async function deleteProduct(id_product){

    return prisma.productos.delete({

        where:{

            id:id_product
        }
    })
}

export {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct}