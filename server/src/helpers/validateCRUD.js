import {validateReq} from '../helpers/validateHelper.js'
import { body, check, param, checkExact } from 'express-validator';

const validateParams = [
    
    check("id").exists().toInt().isInt(),
    (req, res, next) => {
        validateReq(req, res, next);
    }
]

const validateCreate = [

    check("data").exists(),
    check("data.*.producto").exists().isString(),
    check("data.*.precio").exists().isInt(),
    check("data.*.cantidad").exists().isInt(),
    checkExact(),
    (req, res, next) => {
        validateReq(req, res, next);
    }
]

const validateUpdate = [

    param("id").exists().toInt().isNumeric(),
    body("producto").exists().notEmpty(),
    body("precio").exists().toInt().isNumeric(),
    body("cantidad").exists().toInt().isNumeric(),
    checkExact(),
    (req, res, next) => {
        validateReq(req, res, next);
    }
    
]

export {validateParams, validateCreate, validateUpdate}