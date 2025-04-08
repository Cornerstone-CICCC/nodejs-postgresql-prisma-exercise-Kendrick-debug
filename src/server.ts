// Set up your server
import express, {Request, Response } from 'express'
import dotenv from 'dotenv'
import productRouter from './routes/product.routes'
dotenv.config()


//Creating Server
const app = express()


//Middleware
app.use(express.json())


//Routes
app.use('/products', productRouter)



//fallback
app.use((req: Request, res: Response) => {
    res.status(404).send('Invalid route!')
  })
  
//start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
        console.log(`Server is Running on http://localhost:${PORT}`)
})