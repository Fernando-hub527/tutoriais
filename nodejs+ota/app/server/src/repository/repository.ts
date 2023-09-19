import { Versions } from "../entity/Versions";
import { AppDataSource } from "../../infra/database/data-source";

export class VersionRepository {
  async findByName(name: any) {
    const versionRepository = AppDataSource.getRepository(Versions)

    const version = await versionRepository.findOneBy({name: name})
    console.log(version)
    return version;
  }
}