import { getShopItems } from 'src/services/shop';

export const getShop = async () => {
    try {
        const response = await getShopItems();
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
