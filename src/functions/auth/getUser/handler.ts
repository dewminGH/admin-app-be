import { getUserDetails } from 'src/services/auth';

export const getUser = async (event) => {
    const requestBody = JSON.parse(event.body);

    try {
        const response = await getUserDetails(requestBody);
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
    } catch (err) {
        console.log(err);
        return {
            statusCode: 401,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: 'unauthorized',
            }),
        };
    }
};
