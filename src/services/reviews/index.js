import express from "express";
import db from '../../db/models/index.js'


const {Review, User} = db

const ReviewRouter = express.Router()


ReviewRouter.post('/', async(req, res, next) => {
    try {
        const data = await Review.create({...req.body})
        res.status(201).send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

ReviewRouter.get('/', async(req, res, next) => {
    try {
        const data = await Review.findAll({ include: [User]})
        
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

ReviewRouter.get('/:id', async(req, res, next) => {
    try {
        const data = await Review.findByPk(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
})

ReviewRouter.put('/:id', async(req, res, next) => {
    try {
        const data = await Review.update({...req.body}, {
            where: {
                _id: req.params.id
            }
        })
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

ReviewRouter.delete('/:id', async(req, res, next) => {
    try {
        const data = await Review.destroy({where: {
            _id: req.params.id
        }})
        res.status(200).send('deleted')
    } catch (error) {
        next(error)
    }
})

export default ReviewRouter