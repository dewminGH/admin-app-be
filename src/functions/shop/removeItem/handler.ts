import { removeShopItem } from 'src/services/shop';

export const removeItem = async (event) => {
    const requestBody = JSON.parse(event.body);
    try {
        await removeShopItem(requestBody);
        return {
            statusCode: 200,
            body: JSON.stringify({
                response: 'item successfully removed',
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
