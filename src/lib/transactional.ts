import {
    ITransactional,
    ISmartEmailDetailsSummary,
    ISmartEmailDetails,
    ISmartEmailSendResponse,
    ITransactionalEmailStatistics,
} from '../types';
import {CSHttpRequest} from '../CSHttpRequest';
import querystring from 'querystring';

const transactional = (csHttpRequest: CSHttpRequest, baseUrl: string): ITransactional => {
    const transactionalBaseUrl = `${baseUrl}/transactional`;

    return {
        getSmartEmailListing: async ({status = 'all', clientId}) => {
            return await csHttpRequest.get<ISmartEmailDetailsSummary[]>(
                `${transactionalBaseUrl}/smartEmail?${querystring.stringify({status, clientId})}`
            );
        },
        getSmartEmailDetails: async (smartEmailId) => {
            return await csHttpRequest.get<ISmartEmailDetails>(`${transactionalBaseUrl}/smartEmail/${smartEmailId}`);
        },
        sendSmartEmail: async (smartEmailId, smartEmailSendProps) => {
            return await csHttpRequest.post<ISmartEmailSendResponse[]>(
                `${transactionalBaseUrl}/smartEmail/${smartEmailId}/send`,
                smartEmailSendProps
            );
        },
        getStatistics: async (getStatisticsProps) => {
            return await csHttpRequest.get<ITransactionalEmailStatistics>(
                `${transactionalBaseUrl}/statistics?${querystring.stringify({...getStatisticsProps})}`
            );
        },
    };
};

export {transactional};
