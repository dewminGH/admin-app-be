import { getInventory } from 'src/services/inventory';

export const getCustomerInventory = async (event) => {
    const idToken = event.headers['idtoken'];
    console.log(event);
    try {
        const response = await getInventory(idToken);
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: 'fetch done',
                response: response,
            }),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 401,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: 'fetch error',
            }),
        };
    }
};
