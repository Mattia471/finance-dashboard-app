import {api} from "./api.ts";

export const getTransactions = async () => {
    return api.get('/transactions');
}