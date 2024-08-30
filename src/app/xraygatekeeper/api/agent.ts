import axios, { AxiosResponse } from "axios";
import appsettings from "../config/appsettings";
import { IDateRange } from "../models/IDateRange";
import { AppResponse } from "../models/AppResponse";
import { XRayStatsReposne } from "../models/XRayStatsResponse";


axios.defaults.baseURL = appsettings.Urls.baseUrl;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(`${url}`).then(responseBody),
    post: <T>(url: string, body: object) => axios.post<T>(url, body).then(responseBody),
}

const xray = {
    getRequestStats: (date_range: IDateRange) => {
        console.log(`Sending Params ${JSON.stringify(date_range)}`)
        return requests.post<AppResponse<XRayStatsReposne[]>>(`stats/requests/status`, date_range)
    }
}

const agent = { xray }
export default agent;