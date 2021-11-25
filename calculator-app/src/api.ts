import {GlobalGrowl} from "./globalGrowl";
import axios, {AxiosRequestConfig} from "axios";

export const CALCULATOR_API = '/loan-calculator';

const showError500 = (err: any) => {
    if (err && err.response && err.response.status === 500) {
        GlobalGrowl.showError(err.response.status + ' ' + err.response.data.message, 10000);
    }

    throw err
}

export const axios_api = {

    requests: {
        delete: <T>(url: string, config?: AxiosRequestConfig) =>
                axios.delete<T>(url, config)
                        .then(response => response.data)
                        .catch(showError500),
        get: <T>(url: string, config?: AxiosRequestConfig) =>
                axios.get<T>(url, config)
                        .then(response => response.data)
                        .catch(showError500),
        post: <T>(url: string, data: any, config?: AxiosRequestConfig) =>
                axios.post<T>(url, data, config)
                        .then(response => response.data)
                        .catch(showError500),
        put: <T>(url: string, data: any, config?: AxiosRequestConfig) =>
                axios.put<T>(url, data, config)
                        .then(response => response.data)
                        .catch(showError500),
    },

    authorizedRequests: {
        delete: <T>(url: string, config?: AxiosRequestConfig) =>
                axios_api.requests.delete<T>(`${CALCULATOR_API}${url}`, config),
        get: <T>(url: string, config?: AxiosRequestConfig) =>
                axios_api.requests.get<T>(`${CALCULATOR_API}${url}`, config),
        post: <T>(url: string, data: any, config?: AxiosRequestConfig) =>
                axios_api.requests.post<T>(`${CALCULATOR_API}${url}`, data, config),
        put: <T>(url: string, data: any, config?: AxiosRequestConfig) =>
                axios_api.requests.put<T>(`${CALCULATOR_API}${url}`, data, config),
    }
}
