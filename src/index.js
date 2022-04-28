import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GamePage from './pages/GamePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import GameProgress from './pages/GameProgress';
import ClickedLink from './pages/ClickedLink';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="game" element={<GamePage />} />
        <Route path="wiki/*" element={<ClickedLink />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="gameprogress" element={<GameProgress />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);