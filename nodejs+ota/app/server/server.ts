import express from 'express'
import { AppDataSource } from "./infra/database/data-source"
import { Versions } from "./src/entity/Versions"
import { VersionRepository } from "./src/repository/repository"
import * as fs from "fs"

const app = express()
const repository = new VersionRepository()


app.get('/update', async function(req, res, next) {
    const versionFOund = await repository.findByName("1.0")
    const firmware = versionFOund!.firmware.toString('hex')
    console.log(firmware)

    res.status(200).send(versionFOund.firmware)

});




app.listen(3333, () => {
    console.log("Servidr iniciado")
})


AppDataSource.initialize().then(async () => {
    console.log("Banco de dados inicializado")

    try {
        fs.readFile('firmware.bin', (err, data) => {
            sendDatabase(data)
        });

    } catch (e) {
        console.log(e)
    }

}).catch(error => console.log(error))


async function sendDatabase(firmware: Buffer) {

    const version = new Versions()
    version.name = "1.0"
    version.commits = "test"
    version.devices = 1516
    version.id = 1
    version.responsible = 48
    version.createdAt = new Date()
    version.firmware = firmware

    await AppDataSource.manager.save(version)
    // console.log("Saved a new user with id: " + version.id)
    // const versionFOund = await repository.findByName("1.0")

    // const t = versionFOund!.firmware.toString('hex')
    // console.log(t)
}

/*
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")
*/