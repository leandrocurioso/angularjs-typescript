export interface IHttpServiceRequest {
    url: string;
    method: string;
    data?: any;
    headers?: any;
    qs?: any;
}
