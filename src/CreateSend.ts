import {account, clients, lists, subscribers, transactional} from './lib';
import {IAccount, IClients, ILists, ISubscribers, ITransactional} from './types';
import {CSHttpRequest} from './CSHttpRequest';

class CreateSend {
    #apiKey: string;
    #apiVersion: string;
    #baseUrl: string;

    #csHttpRequest: CSHttpRequest;

    account: IAccount;
    clients: IClients;
    lists: ILists;
    subscribers: ISubscribers;
    transactional: ITransactional;

    constructor(apiKey: string, apiVersion = 'v3.2') {
        this.#apiKey = apiKey;
        this.#apiVersion = apiVersion;
        this.#baseUrl = `https://api.createsend.com/api/${this.#apiVersion}`;

        this.#csHttpRequest = new CSHttpRequest(this.#apiKey);

        this.account = account(this.#csHttpRequest, this.#baseUrl);
        this.clients = clients(this.#csHttpRequest, this.#baseUrl);
        this.lists = lists(this.#csHttpRequest, this.#baseUrl);
        this.subscribers = subscribers(this.#csHttpRequest, this.#baseUrl);
        this.transactional = transactional(this.#csHttpRequest, this.#baseUrl);
    }
}

export {CreateSend};
