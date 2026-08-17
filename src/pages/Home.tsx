import { useState } from 'react';
import { Play, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function Home() {
  const [videos] = useState([
    { id: 1, title: 'Global Family Vision 2026', channel: 'E.S OneWorld', views: '2.4M', time: '1 day ago' },
    { id: 2, title: '8K Android Resolution Test', channel: 'TechFlow', views: '980K', time: '3 hours ago' },
    { id: 3, title: 'Live Community Q&A Session', channel: 'NetVerse Official', views: '45K watching', time: 'LIVE' },
    { id: 4, title: 'Urdu Digital Typography Guide', channel: 'Creative Studio', views: '120K', time: '2 weeks ago' },
  ]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Mission Card */}
      <div className="bg-gradient-to-r from-emerald-900 to-gray-900 p-6 rounded-xl mb-8 border border-emerald-700">
        <h2 className="text-2xl font-bold text-emerald-400 mb-2">A Global Family Platform Vision</h2>
        <p className="text-gray-300 mb-4">Tasks: Build Unity • Goals: Digital Empowerment • Challenges: Overcome Division</p>
        <div className="flex gap-4 text-sm">
          <span className="bg-emerald-800 px-3 py-1 rounded-full">Vision Active</span>
          <span className="bg-blue-800 px-3 py-1 rounded-full">Mission On Track</span>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map(video => (
          <div key={video.id} className="group cursor-pointer">
            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative mb-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play size={48} className="text-gray-600 group-hover:text-white transition" />
              </div>
              {video.time === 'LIVE' && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold animate-pulse">LIVE</span>
              )}
            </div>
            <h3 className="font-semibold line-clamp-2 group-hover:text-blue-400 transition">{video.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{video.channel}</p>
            <p className="text-xs text-gray-500 mt-0.5">{video.views} • {video.time}</p>
            
            <div className="flex gap-3 mt-3 text-gray-400">
              <Heart size={16} className="hover:text-red-500 cursor-pointer" />
              <MessageCircle size={16} className="hover:text-blue-500 cursor-pointer" />
              <Share2 size={16} className="hover:text-green-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}