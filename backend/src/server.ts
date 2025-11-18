import express from 'express'
import cors from 'cors'

import type { Express, Request, Response } from 'express'

import { petRouter } from './routes/pets.routes.ts'

const app: Express = express();

app.use(cors())

app.use('/pets', petRouter)

// 404 route
app.use((req: Request, res: Response<{ message: string }>): void => {
    res.status(404).json({
        message: "No routes founded... You lost in void..."
    })
})

app.listen(8000, (): void => {
    console.log("Server is running on the port no. 8000")
})