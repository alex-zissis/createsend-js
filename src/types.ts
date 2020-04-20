export interface IClient {
    ClientID: string;
    Name: string;
}

export interface IBillingDetails {
    Credits: number;
}

export interface ISystemDate {
    SystemDate: string;
}

export interface ISmartEmailListingProps {
    clientId?: string;
    status?: 'all' | 'draft' | 'active';
}

export interface ISmartEmailDetailsSummary {
    ID: string;
    Name: string;
    CreatedAt: string;
    Status: 'Active' | 'Draft';
}

export interface ISmartEmailDetails {
    SmartEmailID: string;
    Name: string;
    CreatedAt: string;
    Status: 'Active' | 'Draft';
    Properties: {
        From: string;
        ReplyTo?: string;
        Subject: string;
        Content: {
            Html: string;
            Text: string;
            EmailVariables: string[];
            InlineCss: true;
        };
        TextPreviewUrl: string;
        HtmlPreviewUrl: string;
    };
    AddRecipientsToList: string;
}

export interface ISmartEmailSendProps {
    To: string[] | null;
    CC: string[] | null;
    BCC: string[] | null;
    Attachments?: {
        Content: string;
        Name: string;
        Type: string;
    }[];
    Data?: {
        [key: string]: string;
    };
    AddRecipientsToList?: boolean;
    ConsentToTrack: 'Yes' | 'No' | 'Unchanged';
}

export interface ISmartEmailSendResponse {
    Status: 'Accepted' | 'Bounced';
    MessageId: string;
    Recipient: string;
}

export interface ICreateListProps {
    Title: string;
    UnsubscribeSetting: 'AllClientLists' | 'OnlyThisList';
    ConfirmedOptIn: boolean;
    UnsubscribePage?: string;
    ConfirmationSuccessPage?: string;
}

export interface IList {
    ListID: string;
    Name: string;
}

export interface IGetTransactionalEmailStatisticsProps {
    group?: string;
    clientId?: string;
    from?: string;
    to?: string;
    timezone?: 'utc' | 'client';
}

export interface ITransactionalEmailStatistics {
    Query: IGetTransactionalEmailStatisticsProps;
    Sent: number;
    Bounces: number;
    Delivered: number;
    Opened: number;
    Clicked: number;
}

export interface IAccount {
    getClients: () => Promise<IClient[]>;
    getBillingDetails: () => Promise<IBillingDetails>;
    getCountries: () => Promise<string[]>;
    getTimezones: () => Promise<string[]>;
    getSystemDate: () => Promise<ISystemDate>;
}

export interface IClients {
    getSubscriberLists: (clientId: string) => Promise<IList[]>;
}

export interface ILists {
    createList: (clientId: string, createListProps: ICreateListProps) => Promise<string>;
}

export interface ITransactional {
    getSmartEmailListing: (smartEmailListingProps: ISmartEmailListingProps) => Promise<ISmartEmailDetailsSummary[]>;
    getSmartEmailDetails: (smartEmailId: string) => Promise<ISmartEmailDetails>;
    sendSmartEmail: (
        smartEmailId: string,
        smartEmailSendProps: ISmartEmailSendProps
    ) => Promise<ISmartEmailSendResponse[]>;
    getStatistics: (
        getStatisticsProps: IGetTransactionalEmailStatisticsProps
    ) => Promise<ITransactionalEmailStatistics>;
}
