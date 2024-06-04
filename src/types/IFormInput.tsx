export interface IFormInput {
    title: string;
    explanation: string;
    price: number;
    isValid: boolean;
    videoFile?: File | null;
    isLoggedIn: boolean;
    email: string;
    password: string;
    name: string;
    username: string;
    location1: string;
    location2: string;
    location3: string;
    location4: string;
    twitterImage: File;
    passwordConfirm: string;
}
