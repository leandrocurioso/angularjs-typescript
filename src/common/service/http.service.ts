import Service from "../../common/service";
import { IHttpServiceRequest } from "../../interface/i-http-service-request";
import { IHttpServiceResponse } from "../../interface/i-http-service-response";

class HttpService extends Service {

    private $http;

    constructor(appModule: angular.IModule) {
        super(appModule, "$HttpService");
    }

    public load(): void {
        this.appModule.factory(this.serviceName,
        [
            "$http",
            (
                $http
            ) =>
            {
                this.$http = $http;
                return this;
            }
        ]);
    }

    public async call(httpServiceRequest: IHttpServiceRequest): Promise<IHttpServiceResponse<any>> {
        return await this.$http(httpServiceRequest)
            .then(response => ({ statusCode: response.status, data: response.data }))
            .catch(err => {
                throw err;
            });
    }

}

export default HttpService;
