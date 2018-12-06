import Controller from "../../../common/controller";

class DemoControler extends Controller {

    protected property = {
        message: "Hello World from AngularJS!"
    };

    constructor(appModule: angular.IModule) {
        super(appModule, "DemoController");
    }

    public async alert(): Promise<void> {
        alert("Working good!");
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
                super.scopeIt($rootScope, $scope);
            }
        ]);
    }
     
}

export default DemoControler;