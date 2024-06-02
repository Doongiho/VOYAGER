import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoUpload from './videoUpload';
import VideoManagement from './videoSales';

interface IFormInput {
    title: string;
    explanation: string;
    price: number;
    isValid: boolean;
    videoFile?: File | null;
}

const VideoManager: React.FC = () => {
    const [videoSales, setVideoSales] = useState<IFormInput[]>([]);

    const handleAddVideo = (newVideo: IFormInput) => {
        setVideoSales([...videoSales, newVideo]);
    };

    return (
        <Routes>
            <Route path="/videoUpload" element={<VideoUpload onAddVideo={handleAddVideo} />} />
            <Route path="/videoManagement" element={<VideoManagement videoSales={videoSales} />} />
        </Routes>
    );
};

export default VideoManager;
