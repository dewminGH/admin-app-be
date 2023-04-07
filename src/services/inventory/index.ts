import * as AWS from 'aws-sdk';
import jwtDecode from 'jwt-decode';
import { IIDTokenDecode } from './types';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const getInventory = async (idToken: string) => {
    const decode: IIDTokenDecode = jwtDecode(idToken);
    console.log(decode.email);
    try {
        const params = {
            TableName: 'UserInventory',
            KeyConditionExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': decode.email,
            },
        };
        console.log(params);
        const data = await dynamoDB.query(params).promise();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
