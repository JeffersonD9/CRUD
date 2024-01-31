import {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct} from '../models/products.js'


// RUTA - /CREATE

    async function createProductController(req,res){

    const data = req.body
        try {
        
            const newProduct = await createProduct(data);
            res.status(201).json(newProduct)
    
        } catch (error) {
    
           // console.error(error);
            res.status(500).send('Algo ha salido mal');
            
        }

}

// RUTA INICIAL

    async function getAllProductsController(req,res){
    
    try {

        const products = await getAllProducts()
        res.json(products)
    
    } catch (error) {
        
       // console.error(error);
        res.status(500).send('Error al obtener los productos');

    }
}

// RUTA - /:id

    async function getProductController(req,res){

    const id = parseInt(req.params.id, 10)

        try {
            
        const producto = await getProduct(id)   
        if(!producto){

         return res.status(400).json("Producto no encontrado")

        }
        res.json(producto)
        
        } catch (error) {

            //console.error(error);
            res.status(500).send('Error al buscar el producto');
        }

    }

//RUTA - /edit/:id

    async function updateProductController(req,res){

        const id = parseInt(req.params.id)
        const {producto ,precio ,cantidad} = req.body

            try {

                const updateProdu = await updateProduct(id,producto,precio,cantidad)

                res.json(updateProdu)
               

            } catch (error) {
                if(error.code === 'P2025'){

                  return  res.status(400).json("El producto no existe")
                }
                console.error(error);
                res.status(500).send("Error al buscar el producto");
            }

        }

//RUTA - /delete/:id

    async function deleteProductController(req,res){

        const id = parseInt(req.params.id)

        try {
            
            const result = await deleteProduct(id)
            res.status(204).json({
                message: "Todo ha salido bien"
            })

        } catch (error) {
            if(error.code == 'P2025'){
                res.status(500).send('Producto no encontrado')
                return;
            }
            console.log(error)
            res.status(500).send('Algo ha salido mal');
        }

    }


export{createProductController, getAllProductsController, getProductController, updateProductController, deleteProductController}
