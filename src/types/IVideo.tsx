export interface IVideo {
    videoFile: File | Blob | null;
    title: string;
    explanation: string;
    price: number;
    isValid: boolean;
    isLoggedIn: boolean;
    id: string;
    videoStr: string;
}