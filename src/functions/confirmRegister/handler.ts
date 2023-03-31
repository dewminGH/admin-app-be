import { confirmUserRegister } from 'src/services/auth';

export const confirmRegister = async (event) => {
    const requestBody = JSON.parse(event.body);
    try {
        const message = await confirmUserRegister(requestBody);
        return {
            statuscode: 200,
            bod: JSON.stringify({
                message: message,
            }),
        };
    } catch (error) {
        return {
            statusCode: 401,
            body: JSON.stringify({
                message: 'cod inValid',
            }),
        };
    }
};
