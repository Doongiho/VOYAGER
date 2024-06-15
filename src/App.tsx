import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Main from './page/main/main';
import Login from './page/login/login';
import Footer from './components/footer';
import Video from './page/video/video';
import VideoSales from './page/videoSales/videoSales';
import Service from './page/service/service';
import SignUp from './page/signUp/signUp';
import VideoPurchase from './page/video/videoPurchase';
import VideoUpload from './page/videoSales/videoUpload';
import MyPage from './page/myPage/myPage';
import VideoManagement from './page/videoSales/videoManagement';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IFormInput } from './types/IFormInput';
import { IVideo } from './types/IVideo';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [videoSales, setVideoSales] = useState<IVideo[]>([]);
  const [currentUser, setCurrentUser] = useState<{ id: number; username: string } | null>(null);

  useEffect(() => {
    const storedVideoSales = localStorage.getItem('videoSales');
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userInfo');
  };

  const handleAddVideo = (newVideo: IVideo) => {
    const updatedVideoSales = [...videoSales, newVideo];
    setVideoSales(updatedVideoSales);
    localStorage.setItem('videoSales', JSON.stringify(updatedVideoSales));
  };

  const handleDeleteVideo = (videoStr: string) => {
    const updatedVideoSales = videoSales.filter(video => video.videoStr !== videoStr);
    setVideoSales(updatedVideoSales);
    localStorage.setItem('videoSales', JSON.stringify(updatedVideoSales));
  };

  return (
    <div>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Video />} />
          <Route path="/videoPurchase" element={<VideoPurchase />} />
          <Route path="/main" element={isLoggedIn ? <Main /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/video" element={<Video />} />
          <Route
            path="/videoSales"
            element={<VideoSales videoSales={videoSales} onDeleteVideo={handleDeleteVideo} isLoggedIn={isLoggedIn} />}
          />
          <Route path="/service" element={<Service />} />
          <Route path="/videoManagement" element={<VideoManagement />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/videoUpload" element={isLoggedIn ? <VideoUpload onAddVideo={handleAddVideo} /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
