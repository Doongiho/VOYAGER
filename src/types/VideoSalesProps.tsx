import { IVideo } from './IVideo';

export interface VideoSalesProps {
    videoSales: IVideo[];
    isLoggedIn: boolean;
    onDeleteVideo: (videoId: string) => void;
}