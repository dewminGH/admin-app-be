import { IConfirmData, IUser } from './types';
import * as AWS from 'aws-sdk';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
    region: 'ap-south-1',
});

/*configure region*/
const getAttributes = (user: IUser) => {
    return [
        new CognitoUserAttribute({ Name: 'email', Value: user.email }),
        new CognitoUserAttribute({ Name: 'name', Value: user.Name }),
    ];
};

/*sign up helper*/
export const userSignUp = async (user: IUser) => {
    try {
        const authParams = {
            ClientId: process.env.CLIENT_ID,
            Password: user.password,
            Username: user.email,
            UserAttributes: getAttributes(user),
        };

        const authData = await cognitoIdentityServiceProvider.signUp(authParams).promise();
        return authData;
    } catch (error: any) {
        throw error;
    }
};

const getUserByEmail = async (email: string) => {
    try {
        const params = {
            UserPoolId: process.env.USER_POOL_ID,
            Filter: `email = \"${email}\"`,
        };
        const data = await cognitoIdentityServiceProvider.listUsers(params).promise();
        return data.Users[0];
    } catch (error) {
        throw error;
    }
};

/*confirm sign up helper*/
export const confirmUserRegister = async (confirmData: IConfirmData) => {
    const user = await getUserByEmail(confirmData.email);
    const params = {
        ClientId: process.env.CLIENT_ID,
        Username: user.Username,
        ConfirmationCode: confirmData.code,
    };
    if (user.UserStatus === 'UNCONFIRMED') {
        await cognitoIdentityServiceProvider.confirmSignUp(params).promise();
        return 'account activated';
    }
    return 'already account activated';
};
