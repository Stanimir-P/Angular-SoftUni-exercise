export interface ICreateTheme {
    themeName: string;
    postText: string;
}

// User utils

export interface IUserBaseDetails {
    username: string;
    password: string;
}

export interface IUpdateUser extends IUserBaseDetails {
    tel: string;
}

export interface IRegisterUser extends IUpdateUser {
    email: string;
    repeatPassword: string;
}