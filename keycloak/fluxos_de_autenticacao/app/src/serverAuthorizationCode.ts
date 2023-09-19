import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { selectEnvironment, typeEnv } from "./utils/selectEnvironment"

if (process.env.NODE_ENV !== "prod") dotenv.config({path:selectEnvironment((process.env.NODE_ENV as typeEnv))})

const app = express()

app.get("/callback", (req: Request, res:Response) => {
    res.status(200).send("<h1>usuário logado</h1>")
})

app.get("/login", (req: Request, res:Response) => {
    const loginParams = new URLSearchParams({
        client_id: process.env.CLIENT_ID!,
        redirect_uri: `http://localhost:${process.env.PORT!}/callback`,
        response_type: 'code',
        scope: 'openid'
    })

    const url = `http://localhost:8080/realms/server_flow/protocol/openid-connect/auth?${loginParams.toString()}`
    res.redirect(url)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})