export interface IUser {
    Name: string;
    email: string;
    password: string;
    profile: string;
    phoneNumber?: string;
}

export interface IConfirmData {
    email: string;
    code: string;
}
