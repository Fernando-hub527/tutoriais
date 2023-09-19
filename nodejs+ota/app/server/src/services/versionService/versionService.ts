import { VersionRepository } from "../../repository/repository";

export class VersionService {
    repository: VersionRepository

    constructor(){
        this.repository = new VersionRepository()
    }

    findVersionByName(name: String){
        return this.repository.findByName(name)
    }
}