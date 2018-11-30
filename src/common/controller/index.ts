import { IController } from "../../interface/i-controller";

abstract class Controller implements IController {

    protected readonly appModule: angular.IModule;
    protected readonly controllerName: string;

    constructor(appModule: angular.IModule, controllerName: string) {
        this.appModule = appModule;
        this.controllerName = controllerName;
    }

    public load(): void {
        throw new Error(`Load method for [${this.controllerName}] controller is not implemented!`);
    }

}

export default Controller;