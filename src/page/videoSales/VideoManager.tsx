import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoUpload from './videoUpload';
import VideoManagement from './videoSales';
import { IVideo } from '../../types/IVideo';

const VideoManager: React.FC = () => {
    const [videos, setVideos] = useState<IVideo[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleAddVideo = (newVideo: IVideo) => {
        setVideos([...videos, newVideo]);
    };
    const handleDelete = (videoId: string) => {
        const updatedVideoSales = videos.filter(video => video.id !== videoId);
        setVideos(updatedVideoSales);
    };

    return (
        <Routes>
            <Route path="/videoUpload" element={<VideoUpload onAddVideo={handleAddVideo} />} />
            <Route path="/videoManagement" element={<VideoManagement videos={videos} isLoggedIn={isLoggedIn} onDeleteVideo={handleDelete} />} />
        </Routes>
    );
};

export default VideoManager;
