import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Layout from './components/Layout';
import Home from './pages/Home';
import IslamicSeriesHub from './pages/IslamicSeriesHub';
import NewsAggregator from './pages/NewsAggregator';
import AdminPanel from './pages/AdminPanel';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/islamic" element={<IslamicSeriesHub />} />
          <Route path="/news" element={<NewsAggregator />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}