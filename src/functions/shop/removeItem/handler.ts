import { removeShopItem } from 'src/services/shop';

export const removeItem = async (event) => {
    const requestBody = JSON.parse(event.body);
    try {
        await removeShopItem(requestBody);
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: 'fetch done',
                response: 'item successfully removed',
            }),
        };
    } catch (error) {
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
