export interface AppResponse<T>{
    success: boolean;
    result: T;
    error?: string| string[];
    statCode: number;
}