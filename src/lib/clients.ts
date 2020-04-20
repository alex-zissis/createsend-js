import {CSHttpRequest} from '../CSHttpRequest';
import {IClients, IList} from '../types';

const clients = (csHttpRequest: CSHttpRequest, baseUrl: string): IClients => {
    const clientsBaseUrl = `${baseUrl}/clients`;

    return {
        getSubscriberLists: async (clientId) => {
            return await csHttpRequest.get<IList[]>(`${clientsBaseUrl}/${clientId}/lists.json`);
        },
    };
};

export {clients};
