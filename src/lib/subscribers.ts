import {CSHttpRequest} from '../CSHttpRequest';
import {ISubscribers} from '../types';

const subscribers = (csHttpRequest: CSHttpRequest, baseUrl: string): ISubscribers => {
    const subscribersBaseUrl = `${baseUrl}/subscribers`;

    return {
        addSubscriber: async (listId, addSubscriberProps) => {
            console.log(addSubscriberProps);
            return await csHttpRequest.post<string>(`${subscribersBaseUrl}/${listId}.json`, addSubscriberProps);
        },
    };
};

export {subscribers};
