import { IVideo } from './IVideo';

export interface VideoSalesProps {
    videos: IVideo[];
    isLoggedIn: boolean;
    onDeleteVideo: (videoId: string) => void;
}