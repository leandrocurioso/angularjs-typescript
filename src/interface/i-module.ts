import { IService } from "./i-service";
import { IController } from "./i-controller";

export interface IModule {
    load(services: IService[], controllers: IController[]): void;
}
