import {axios_api, CALCULATOR_API} from "../api";
import Calculator from "./calculator";


export const CalculatorAPI = {

    getCalculateRecord: () =>
        axios_api.authorizedRequests.get<Calculator[]>(`${CALCULATOR_API}/calculate`)
}