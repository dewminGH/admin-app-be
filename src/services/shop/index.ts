import * as AWS from 'aws-sdk';
import { IShopDeleteItem, IShopSaveItem } from './types';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const getShopItems = async () => {
    try {
        const params = {
            TableName: 'Items',
        };

        const data = await dynamoDB.scan(params).promise();
        return data;
    } catch (err) {
        throw err;
    }
};

export const removeShopItem = async (item: IShopDeleteItem) => {
    const params = {
        TableName: 'Items',
        Key: {
            id: item.id,
        },
    };
    try {
        await dynamoDB.delete(params).promise();
    } catch (err) {
        throw err;
    }
};

export const saveShopItem = async (item: IShopSaveItem) => {
    const params = {
        TableName: 'Items',
        Item: {
            id: item.id,
            name: item.name,
            county: item.country,
            price: item.price,
            quantity: item.quantity,
        },
    };
    try {
        await dynamoDB.put(params).promise();
    } catch (err) {
        throw err;
    }
};
