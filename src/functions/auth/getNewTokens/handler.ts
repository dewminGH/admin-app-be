import { userGetNewTokens } from 'src/services/auth';

export const getNewTokens = async (event) => {
    const requestBody = JSON.parse(event.body);

    try {
        const response = await userGetNewTokens(requestBody);
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: 'authorized',
                response: response,
            }),
        };
    } catch (err: any) {
        return {
            statusCode: 401,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: 'not authorized',
            }),
        };
    }
};
