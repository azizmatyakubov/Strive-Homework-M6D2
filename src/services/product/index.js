import express from "express";
import db from '../../db/models/index.js'
import Review from "../../db/models/Review.js";

const {Product, User} = db

const productRouter = express.Router()


productRouter.post('/', async(req, res, next) => {
    try {
        const data = await Product.create({...req.body})
        res.status(201).send(data)
    } catch (error) {
        next(error)
    }
})

productRouter.get('/', async(req, res, next) => {
    try {
        const data = await Product.findAll({
            include: {model: Review, include: {model: User}}
        })
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
})

productRouter.get('/:id', async(req, res, next) => {
    try {
        const data = await Product.findByPk(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
})

productRouter.put('/:id', async(req, res, next) => {
    try {
        const data = await Product.update({...req.body},{
            where: {
                _id: req.params.id
            }
        })
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
})

productRouter.delete('/:id', async(req, res, next) => {
    try {
        const data = await Product.destroy({
            where: {
                _id: req.params.id
            }
        })
        res.status(200).send('Deleted')
    } catch (error) {
        next(error)
    }
})

export default productRouter