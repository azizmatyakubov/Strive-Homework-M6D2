import express from "express";
import db from '../../db/models/index.js'

const {User, Blog} = db

const UserRouter = express.Router()


UserRouter.post('/', async(req, res, next) => {
    try {
        const data = await User.create(req.body)
        res.status(201).send(data)
    } catch (error) {
        next(error)
    }
})

UserRouter.get('/', async(req, res, next)=>{
    try {
        const data = await User.findAll({
            include: [Blog]
        })
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
})


export default UserRouter