export interface IHttpServiceResponse<T> {
    statusCode: number;
    data: T;
}
