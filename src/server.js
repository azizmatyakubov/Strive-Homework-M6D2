import express from 'express'
import { testDB, syncDB } from './db/index.js'
import listendpoints from 'express-list-endpoints'
import blogRouter from './services/blog/index.js'
import productRouter from './services/product/index.js'
import reviewRouter from './services/reviews/index.js'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 4000


app.use(express.json())
app.use(cors())
app.use('/blog', blogRouter)
app.use('/product', productRouter)
app.use('/reviews', reviewRouter)



app.listen(PORT, async()=> {
    console.log(`Server is running on ${PORT}`)
    console.table(listendpoints(app))
    await testDB()
    await syncDB()
})