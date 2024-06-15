import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoUpload from './videoUpload';
import VideoManagement from './videoSales';
import { IVideo } from '../../types/IVideo';

const VideoManager: React.FC = () => {
    const [videoSales, setVideoSales] = useState<IVideo[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleAddVideo = (newVideo: IVideo) => {
        setVideoSales([...videoSales, newVideo]);
    };
    const handleDelete = (videoId: string) => {
        const updatedVideoSales = videoSales.filter(video => video.id !== videoId);
        setVideoSales(updatedVideoSales);
    };


    return (
        <Routes>
            <Route path="/videoUpload" element={<VideoUpload onAddVideo={handleAddVideo} />} />
            <Route path="/videoManagement" element={<VideoManagement videoSales={videoSales} isLoggedIn={isLoggedIn} onDeleteVideo={handleDelete} />} />
        </Routes>
    );
};

export default VideoManager;
