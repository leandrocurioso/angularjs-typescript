import Module from "..";
import HttpService from "../../common/service/http.service";
import DemoController from "../../module/app/controller/demo.controller";

class AppModule extends Module {

    constructor(angularJs) {
        super
        (
            "AppModule", 
            [
                'ngRoute', 'ngCookies'
            ], 
            angularJs
        );
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