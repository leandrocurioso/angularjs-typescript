import { IModule } from "../interface/i-module";
import { IService } from "../interface/i-service";
import { IController } from "../interface/i-controller";

abstract class Module implements IModule{

    protected readonly angularJs;
    protected readonly moduleName: string;
    protected readonly dependencies: string[];
    public appModule: angular.IModule;

    constructor(moduleName: string, dependencies: string[], angularJs) {
        this.moduleName = moduleName;
        this.dependencies = dependencies;
        this.angularJs = angularJs;
    }

    protected setModule(config, run): void {
        this.appModule = this.angularJs.module(this.moduleName, this.dependencies)
                                       .config(config)
                                       .run(run);
    }

    protected loadServices(services: IService[]): void {
        services.forEach(service => {
            service.load();
        });
    }

    protected loadControllers(controllers: IController[]): void {
        controllers.forEach(controller => {
            controller.load();
        });
    }

    public load(): void {
        throw new Error(`load() method for [${this.moduleName}] module is not overridden!`);
    }

}

export default Module;