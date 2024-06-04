import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoUpload from './videoUpload';
import VideoManagement from './videoSales';
import { IFormInput } from '../../types/IFormInput';

const VideoManager: React.FC = () => {
    const [videoSales, setVideoSales] = useState<IFormInput[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleAddVideo = (newVideo: IFormInput) => {
        setVideoSales([...videoSales, newVideo]);
    };

    return (
        <Routes>
            <Route path="/videoUpload" element={<VideoUpload onAddVideo={handleAddVideo} />} />
            <Route path="/videoManagement" element={<VideoManagement videoSales={videoSales} isLoggedIn={isLoggedIn} />} />
        </Routes>
    );
};

export default VideoManager;
