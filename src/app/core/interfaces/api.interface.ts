export interface IApiResponse<T> {
    successful: boolean;
    status: number;
    message: string;
    data: T;
    timestamp: string;
}
