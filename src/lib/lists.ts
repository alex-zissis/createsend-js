import {CSHttpRequest} from '../CSHttpRequest';
import {ILists} from '../types';

const lists = (csHttpRequest: CSHttpRequest, baseUrl: string): ILists => {
    const listBaseUrl = `${baseUrl}/lists`;

    return {
        createList: async (clientId, createListProps) => {
            return await csHttpRequest.post<string>(`${listBaseUrl}/${clientId}.json`, createListProps);
        },
    };
};

export {lists};
