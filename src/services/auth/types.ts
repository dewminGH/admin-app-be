export interface IUser {
    Name: string;
    phoneNumber?: string;
    email: string;
    password: string;
}

export interface IConfirmData {
    email: string;
    code: string;
}
