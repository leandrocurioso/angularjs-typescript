import { IController } from "../../interface/i-controller";

abstract class Controller implements IController {

    protected readonly appModule: angular.IModule;
    protected readonly controllerName: string;
    protected $rootScope;
    protected $scope;

    constructor(appModule: angular.IModule, controllerName: string) {
        this.appModule = appModule;
        this.controllerName = controllerName;
    }

    public load(): void {
        throw new Error(`load() method for [${this.controllerName}] controller is not overridden!`);
    }

    protected scopeIt($rootScope, $scope): void {
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$scope.property = Object.assign({}, this["property"]);
        this.$scope.method = Object.assign({}, this["__proto__"]);
        delete this.$scope.method.constructor;
        delete this.$scope.method.load;
    }

}

export default Controller;