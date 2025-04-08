import { Request, Response, Router } from "express";


const pageRouter = Router()


//Home
pageRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send('Welcome To My Webpage')
})

export default pageRouter


//this page is to test if my server renders this properly and its working