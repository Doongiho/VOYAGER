export interface IVideo {
    videoFile: File | Blob | null;
    title: string;
    explanation: string;
    price: number;
    isValid: boolean;
    isLoggedIn: boolean;
    id: string;
    videoStr: string;
    username: string;
    useremail:string;
    twitterImage: string;
    videoUrl: string;
}