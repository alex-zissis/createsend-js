import {CSHttpRequest} from '../CSHttpRequest';
import {IAccount, IClient, IBillingDetails, ISystemDate} from '../types';

const account = (csHttpRequest: CSHttpRequest, baseUrl: string): IAccount => {
    const accountBaseUrl = `${baseUrl}`;

    return {
        getClients: async () => {
            return await csHttpRequest.get<IClient[]>(`${accountBaseUrl}/clients.json`);
        },
        getBillingDetails: async () => {
            return await csHttpRequest.get<IBillingDetails>(`${accountBaseUrl}/billingdetails.json`);
        },
        getCountries: async () => {
            return await csHttpRequest.get<string[]>(`${accountBaseUrl}/countries.json`);
        },
        getTimezones: async () => {
            return await csHttpRequest.get<string[]>(`${accountBaseUrl}/timezones.json`);
        },
        getSystemDate: async () => {
            return await csHttpRequest.get<ISystemDate>(`${accountBaseUrl}/timezones.json`);
        },
    };
};

export {account};
