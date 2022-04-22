import express from 'express'
import db from '../../db/models/index.js'

const {Blog, Review} = db

const blogRouter = express.Router()

blogRouter.post('/', async(req, res, next)=>{
    try {
        const jane = await Blog.create(req.body);
        res.status(201).send(jane)
    } catch (error) {
        next(error)
    }
})

blogRouter.get('/', async(req, res, next)=>{
    try {
        const data = await Blog.findAll({include: [Review],})
        res.send(data)
    } catch (error) {
        next(error)
    }
})

blogRouter.get('/:id', async(req, res, next)=>{
    try {
        const data = await Blog.findByPk(req.params.id, {include: [Review]})
        res.send(data)
    } catch (error) {
        next(error)
    }
})

blogRouter.put('/:id', async(req, res, next) => {
    try {
        const data = Blog.update({...req.body}, {
            where: {
                id: req.params.id
            }
        })
        await res.send('Success')
    } catch (error) {
        next(error)
    }
})

blogRouter.delete('/:id', async(req, res, next) => {
    try {
        const data = await Blog.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('deleted')
    } catch (error) {
        next(error)
    }
})
export default blogRouter;