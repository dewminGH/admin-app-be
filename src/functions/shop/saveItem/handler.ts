import { saveShopItem } from 'src/services/shop';

export const saveItem = async (event) => {
    const requestBody = JSON.parse(event.body);
    try {
        await saveShopItem(requestBody);
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: 'item successfully saved',
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
