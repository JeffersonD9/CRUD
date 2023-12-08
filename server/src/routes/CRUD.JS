import { Router } from 'express'
import {createProductController, getAllProductsController, getProductController, updateProductController, deleteProductController} from '../controllers/controlador.CRUD.js'
import {validateParams,validateCreate, validateUpdate} from '../helpers/validateCRUD.js'

const router = Router()

router.get('/',getAllProductsController)

router.get('/:id',validateParams , getProductController)

router.post('/Create',validateCreate, createProductController)

router.patch('/Edit/:id' ,validateUpdate, updateProductController)

router.delete('/Delete/:id',validateParams,  deleteProductController)

export default router