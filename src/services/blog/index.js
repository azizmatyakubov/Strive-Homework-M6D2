import express from 'express'
import db from '../../db/models/index.js'

const {Blog} = db

const blogRouter = express.Router()

blogRouter.post('/', async(req, res, next)=>{
    try {
        const jane = await Blog.create({ title: "React", content: "It is good" });
        console.log("Jane's auto-generated ID:", jane.id);
        res.status(201).send(jane)
    } catch (error) {
        next(error)
    }
})

blogRouter.get('/', async(req, res, next)=>{
    try {
        const data = await Blog.findAll()
        res.send(data)
    } catch (error) {
        next(error)
    }
})

blogRouter.get('/:id', async(req, res, next)=>{
    try {
        const data = await Blog.findByPk(req.params.id)
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