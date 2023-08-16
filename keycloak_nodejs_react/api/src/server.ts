import express, { Request, Response } from "express"
import httpAuthenticationMiddlewares from "./midware";
import cors from "cors"

const app = express()
app.use(cors())

function listFakeThems(){
    return [{id: 1, name: "biologia"}, {id: 2, name: "matemática"}, {id: 3, name: "geografia"}, {id: 4, name: "redação"}, {id: 5, name: "matemática"}, {id: 6, name: "inglês"}]
}

app.get("/thems", httpAuthenticationMiddlewares, (req: Request, res: Response) => res.status(200).send(listFakeThems()))

app.listen(3333, () => console.log("Servidor iniciado"))