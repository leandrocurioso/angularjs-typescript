import Controller from "../../../common/controller";

class DemoControler extends Controller {

    private $rootScope;
    private $scope;

    constructor(appModule: angular.IModule) {
        super(appModule, "DemoController");
    }

    public load(): void {
        this.appModule.controller(this.controllerName,
        [
            '$rootScope',
            '$scope',
            (
                $rootScope, 
                $scope
            ) =>
            {
                this.$rootScope = $rootScope;
                this.$scope = $scope;
                this.$scope.message = "Hello World from AngularJS!";
                return this;
            }
        ]);
    }
     
}

export default DemoControler;