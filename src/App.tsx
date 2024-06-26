import { useState, useEffect } from 'react';
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
import { IVideo } from './types/IVideo';
import '../src/index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn === 'true') {
      setIsLoggedIn(true);
    }

    const storedVideos = localStorage.getItem('videos');
    if (storedVideos) {
      setVideos(JSON.parse(storedVideos));
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddVideo = (newVideo: IVideo) => {
    const updatedVideoSales = [...videos, newVideo];
    setVideos(updatedVideoSales);
    localStorage.setItem('videos', JSON.stringify(updatedVideoSales));
  };

  const handleDeleteVideo = (videoStr: string) => {
    const updatedVideoSales = videos.filter(video => video.videoStr !== videoStr);
    setVideos(updatedVideoSales);
    localStorage.setItem('videos', JSON.stringify(updatedVideoSales));
  };

  return (
    <div>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Video videos={videos} isLoggedIn={isLoggedIn} onDeleteVideo={handleDeleteVideo} />} />
          <Route path="/videoPurchase" element={<VideoPurchase />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/video" element={<Video videos={videos} isLoggedIn={isLoggedIn} onDeleteVideo={handleDeleteVideo} />} />
          <Route path="/videoSales" element={<VideoSales videos={videos} isLoggedIn={isLoggedIn} onDeleteVideo={handleDeleteVideo} />} />
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