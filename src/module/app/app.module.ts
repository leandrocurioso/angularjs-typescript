import Module from "..";
import HttpService from "../../common/service/http.service";
import DemoController from "../../module/app/controller/demo.controller";

class AppModule extends Module {

    private static readonly dependencies: string[] = [
      'ngRoute', 'ngCookies'
    ];

    constructor(angularJs) {
        super("AppModule", AppModule.dependencies, angularJs);
    }

    public load(): void {
        super.setModule(this.config, this.run);
        super.loadServices([
            new HttpService(this.appModule)
        ]);
        super.loadControllers([
            new DemoController(this.appModule)
        ]);
    }

    private config(): any {
        return 
            [
                "$routeProvider", 
                "$cookiesProvider"
            ,
            (
                $routeProvider, 
                $cookiesProvider
            ) => 
            {

            }
        ];
    }

    private run(): any {
        return 
            [
                "$rootScope", 
                "$window"
            ,
            (
                $rootScope, 
                $window
            ) => 
            {

            }
        ];
    }
  
}

export default AppModule;