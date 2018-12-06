import { IService } from "../../interface/i-service";

abstract class Service implements IService {

    protected readonly appModule: angular.IModule;
    protected readonly serviceName: string;

    constructor(appModule: angular.IModule, serviceName: string) {
        this.appModule = appModule;
        this.serviceName = serviceName;
    }

    public load(): void {
        throw new Error(`load() method for [${this.serviceName}] service is not overridden!`);
    }

}

export default Service;