import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { selectEnvironment, typeEnv } from "./utils/selectEnvironment"

if (process.env.NODE_ENV !== "prod") dotenv.config({path:selectEnvironment((process.env.NODE_ENV as typeEnv))})

const app = express()

app.get("/", (req: Request, res:Response) => {
    res.status(200).send("ola")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})