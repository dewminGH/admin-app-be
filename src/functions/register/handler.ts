import { userSignUp } from 'src/services/auth';

export const register = async (event) => {
    const requestBody = JSON.parse(event.body);
    try {
        const result = await userSignUp(requestBody);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Authentication successful',
                res: result,
            }),
        };
    } catch (err) {
        return {
            statusCode: 401,
            body: JSON.stringify({
                message: 'Authentication failed',
            }),
        };
    }
};
