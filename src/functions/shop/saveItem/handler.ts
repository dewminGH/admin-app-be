import { saveShopItem } from 'src/services/shop';

export const saveItem = async (event) => {
    const requestBody = JSON.parse(event.body);
    try {
        await saveShopItem(requestBody);
        return {
            statusCode: 200,
            body: JSON.stringify({
                response: 'item successfully saved',
            }),
        };
    } catch (error) {
        return {
            statusCode: 401,
            body: JSON.stringify({
                response: 'fetch error',
            }),
        };
    }
};
