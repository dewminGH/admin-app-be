import { userGetNewTokens } from 'src/services/auth';

export const getNewTokens = async (event) => {
    const requestBody = JSON.parse(event.body);

    try {
        const response = await userGetNewTokens(requestBody);
        return {
            statusCode: 200,
            body: JSON.stringify({
                response: response,
            }),
        };
    } catch (err: any) {
        return {
            statusCode: 401,
            body: JSON.stringify({
                response: 'not authorized',
            }),
        };
    }
};
