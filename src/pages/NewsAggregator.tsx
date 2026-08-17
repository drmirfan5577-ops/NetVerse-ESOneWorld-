import { useState } from 'react';
import { Newspaper, Tv, Radio } from 'lucide-react';

export default function NewsAggregator() {
  const [activeTab, setActiveTab] = useState('all');
  
  const channels = [
    { id: 1, name: 'Geo News', type: 'tv', live: true },
    { id: 2, name: 'ARY Digital', type: 'tv', live: false },
    { id: 3, name: 'BBC Urdu', type: 'radio', live: true },
    { id: 4, name: 'Dawn News', type: 'tv', live: false },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">
        News & Political Aggregator
      </h2>
      
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {['all', 'tv', 'radio', 'digital'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg capitalize ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            {tab} Channels
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channels.filter(c => activeTab === 'all' || c.type === activeTab).map(channel => (
          <div key={channel.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
              {channel.type === 'tv' ? <Tv size={48} className="text-gray-600" /> : <Radio size={48} className="text-gray-600" />}
              {channel.live && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold animate-pulse">LIVE</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{channel.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{channel.type.toUpperCase()} Channel</p>
              <button className="mt-3 w-full py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}