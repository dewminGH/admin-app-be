import * as AWS from 'aws-sdk';
import { IConfirmData, IGetNewTokens, IGetUser, IUser, IUserData } from './types';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

/*configure region*/
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
    region: 'ap-south-1',
});

/*create user attribute helper*/
const getAttributes = (user: IUser) => {
    return [
        new CognitoUserAttribute({ Name: 'email', Value: user.username }),
        new CognitoUserAttribute({ Name: 'name', Value: user.name }),
        new CognitoUserAttribute({ Name: 'profile', Value: user.profile }),
    ];
};

/*sign up helper*/
export const userSignUp = async (user: IUser) => {
    try {
        const authParams = {
            ClientId: process.env.CLIENT_ID,
            Password: user.password,
            Username: user.username,
            UserAttributes: getAttributes(user),
        };

        const authData = await cognitoIdentityServiceProvider.signUp(authParams).promise();
        return authData;
    } catch (err: any) {
        throw err;
    }
};

const getUserByEmail = async (username: string) => {
    try {
        const params = {
            UserPoolId: process.env.USER_POOL_ID,
            Filter: `email = \"${username}\"`,
        };
        const data = await cognitoIdentityServiceProvider.listUsers(params).promise();
        return data.Users[0];
    } catch (err) {
        throw err;
    }
};

/*confirm sign up helper*/
export const confirmUserRegister = async (confirmData: IConfirmData) => {
    try {
        const user = await getUserByEmail(confirmData.username);
        const params = {
            ClientId: process.env.CLIENT_ID,
            Username: user.Username,
            ConfirmationCode: confirmData.code,
        };
        if (user.UserStatus === 'UNCONFIRMED') {
            await cognitoIdentityServiceProvider.confirmSignUp(params).promise();
            return 'account activated';
        }
        return 'failed to activate account';
    } catch (err: any) {
        throw err;
    }
};

/*User SignIn user helper*/
export const userSignIn = async (userData: IUserData) => {
    try {
        const params = {
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId: process.env.CLIENT_ID,
            AuthParameters: {
                USERNAME: userData.username,
                PASSWORD: userData.password,
            },
        };

        const data = await new Promise((resolve, reject) => {
            cognitoIdentityServiceProvider.initiateAuth(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data.AuthenticationResult);
                }
            });
        });
        return data;
    } catch (err: any) {
        throw err;
    }
};

/*token refresh helper*/
export const userGetNewTokens = async (tokenData: IGetNewTokens) => {
    try {
        const params = {
            AuthFlow: 'REFRESH_TOKEN_AUTH',
            ClientId: process.env.CLIENT_ID,
            AuthParameters: {
                REFRESH_TOKEN: tokenData.refreshToken,
            },
            ClientMetadata: {
                REFRESH_TOKEN: tokenData.refreshToken,
            },
        };
        const data = await new Promise((resolve, reject) => {
            cognitoIdentityServiceProvider.initiateAuth(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        return data;
    } catch (err: any) {
        throw err;
    }
};

/*get current helper*/
export const getUserDetails = async (tokenData: IGetUser) => {
    try {
        var params = {
            AccessToken: tokenData.accessToken,
        };
        const data = await new Promise((resolve, reject) => {
            cognitoIdentityServiceProvider.getUser(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        return data;
    } catch (err: any) {
        throw err;
    }
};
