export interface IFormInput {
    id: string;
    name: string;
    username: string;
    email: string;
    location1: string;
    location2: string;
    location3: string;
    location4: string;
    twitterImage?: File;
    password: string;
    passwordConfirm?: string;
}