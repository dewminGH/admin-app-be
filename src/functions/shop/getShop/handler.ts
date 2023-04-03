import { getShopItems } from 'src/services/shop';

export const getShop = async () => {
    try {
        const response = await getShopItems();
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
                response: 'fetch error',
            }),
        };
    }
};
