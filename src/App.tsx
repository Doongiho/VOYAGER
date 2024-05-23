import React from 'react';
import Header from './components/header';
import Main from './page/main/main'
import Login from './page/login/login'
import Footer from './components/footer';
import Video from './page/video/video';
import VideoSales from './page/videoSales/videoSales';
import Service from './page/service/service';
import SignUp from './page/signUp/signUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/video" element={<Video />}></Route>
          <Route path="/videoSales" element={<VideoSales />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
