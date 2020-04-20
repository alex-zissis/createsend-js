import {account, clients, lists, transactional} from './lib';
import {IAccount, IClients, ITransactional, ILists} from './types';
import {CSHttpRequest} from './CSHttpRequest';

class CreateSend {
    #apiKey: string;
    #apiVersion: string;
    #baseUrl: string;

    #csHttpRequest: CSHttpRequest;

    account: IAccount;
    clients: IClients;
    lists: ILists;
    transactional: ITransactional;

    constructor(apiKey: string, apiVersion = 'v3.2') {
        this.#apiKey = apiKey;
        this.#apiVersion = apiVersion;
        this.#baseUrl = `https://api.createsend.com/api/${this.#apiVersion}`;

        this.#csHttpRequest = new CSHttpRequest(this.#apiKey);

        this.account = account(this.#csHttpRequest, this.#baseUrl);
        this.clients = clients(this.#csHttpRequest, this.#baseUrl);
        this.lists = lists(this.#csHttpRequest, this.#baseUrl);
        this.transactional = transactional(this.#csHttpRequest, this.#baseUrl);
    }
}

export {CreateSend};
