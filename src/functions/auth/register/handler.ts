import { userSignUp } from 'src/services/auth';

export const register = async (event) => {
    const requestBody = JSON.parse(event.body);

    try {
        const response = await userSignUp(requestBody);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'authentication successful',
                response: response,
            }),
        };
    } catch (err) {
        return {
            statusCode: 401,
            body: JSON.stringify({
                response: 'authentication failed',
            }),
        };
    }
};
