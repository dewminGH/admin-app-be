import { userSignIn } from 'src/services/auth';

export const login = async (event) => {
    const requestBody = JSON.parse(event.body);

    try {
        const response = await userSignIn(requestBody);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'login successful',
                response: response,
            }),
        };
    } catch (err) {
        return {
            statusCode: 401,
            body: JSON.stringify({
                response: 'check password and username',
            }),
        };
    }
};
