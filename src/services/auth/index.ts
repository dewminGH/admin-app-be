import { IUser } from './types';
import * as AWS from 'aws-sdk';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
    region: 'ap-south-1',
});

export const userSignUp = async (user: IUser) => {
    console.log('---->', user.email, user.password);
    try {
        const authParams = {
            ClientId: process.env.USER_POOL_ID,
            Password: user.password,
            Username: user.email,
            UserAttributes: getAttributes(user),
        };

        const authData = await cognitoIdentityServiceProvider.signUp(authParams).promise();
        console.log(authData);
        return authData;
    } catch (error: any) {
        console.log(error);
        throw error;
    }
};

const getAttributes = (user: IUser) => {
    return [
        new CognitoUserAttribute({ Name: 'email', Value: user.email }),
        new CognitoUserAttribute({ Name: 'name', Value: user.Name }),
    ];
};
