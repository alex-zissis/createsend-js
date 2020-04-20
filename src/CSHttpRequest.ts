import axios from 'axios';

class CreateSendApiError extends Error {
    status: number;
    code: number;
    errorMsg: string;

    constructor(status: number, code: number, message: string) {
        super(`Error ${status}: code ${code} - ${message}`);
        this.name = 'CreateSendApiError';
        this.status = status;
        this.code = code;
        this.errorMsg = message;
        this.message = `${status} Error: code ${code} - ${message}`;
    }
}

class CSHttpRequest {
    #apiKey: string;
    auth: {
        username: string;
        password: string;
    };

    async get<IRes>(url: string): Promise<IRes> {
        try {
            const res = await axios.get<IRes>(url, {auth: this.auth});
            return res.data;
        } catch (ex) {
            throw new CreateSendApiError(ex.response.status, ex.response.data.Code, ex.response.data.Message);
        }
    }

    async post<IRes>(url: string, body: object): Promise<IRes> {
        try {
            const res = await axios.post<IRes>(url, body, {auth: this.auth});
            return res.data;
        } catch (ex) {
            throw new CreateSendApiError(ex.response.status, ex.response.data.Code, ex.response.data.Message);
        }
    }

    constructor(apiKey: string) {
        this.#apiKey = apiKey;

        this.auth = {
            username: this.#apiKey,
            password: 'x',
        };
    }
}

export {CSHttpRequest};
