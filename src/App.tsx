import React, { useState } from 'react';
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IFormInput } from './types/IFormInput';

function App() {
  const [videoSales, setVideoSales] = useState<IFormInput[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleAddVideo = (newVideo: IFormInput) => {
    setVideoSales([...videoSales, newVideo]);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Video />}></Route>
          <Route path="/videoPurchase" element={<VideoPurchase />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/login" element={<Login onLogin={handleLogin} />}></Route>
          <Route path="/video" element={<Video />}></Route>
          <Route path="/videoSales" element={<VideoSales videoSales={videoSales} isLoggedIn={isLoggedIn} />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/videoUpload" element={<VideoUpload onAddVideo={handleAddVideo} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
