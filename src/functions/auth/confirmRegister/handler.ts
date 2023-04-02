import { confirmUserRegister } from 'src/services/auth';

export const confirmRegister = async (event) => {
    const requestBody = JSON.parse(event.body);

    try {
        const response = await confirmUserRegister(requestBody);
        return {
            statusCode: 200,
            body: JSON.stringify({
                response: response,
            }),
        };
    } catch (error) {
        return {
            statusCode: 401,
            body: JSON.stringify({
                response: 'cod not valid',
            }),
        };
    }
};
