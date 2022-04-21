import express from 'express'
import { testDB, syncDB } from './db/index.js'


const app = express()
const PORT = process.env.PORT



app.listen(PORT, async()=> {
    console.log(`Server is running on ${PORT}`)
    await testDB()
    await syncDB()
})