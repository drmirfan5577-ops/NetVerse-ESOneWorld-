import { useEffect, useState } from 'react';
import { BookOpen, PlayCircle, FileText } from 'lucide-react';

export default function IslamicSeriesHub() {
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    // Mock data for preview - replace with Supabase fetch in production
    setContent([
      { id: 1, title: 'Surah Al-Baqarah Full Recitation', type: 'audio', duration: 7200 },
      { id: 2, title: 'Daily Morning Azkaar PDF', type: 'pdf', duration: 0 },
      { id: 3, title: '40 Hadith Collection Video', type: 'video', duration: 1800 },
    ]);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-emerald-600 border-b-2 border-emerald-600 pb-2">
        Islamic Series Hub
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <PlayCircle className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quran Pak & Ahadees</h3>
          <p className="text-gray-400 text-sm">Audio/Video recitations with translations.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <BookOpen className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Daily Azkaars</h3>
          <p className="text-gray-400 text-sm">Morning/Evening supplications and routines.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <FileText className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">PDF Library</h3>
          <p className="text-gray-400 text-sm">Downloadable guides and to-do lists.</p>
        </div>
      </div>

      <div className="space-y-4">
        {content.map(item => (
          <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
            <div className="w-24 h-16 bg-gray-700 rounded flex items-center justify-center">
              {item.type === 'pdf' ? <FileText size={24} /> : <PlayCircle size={24} />}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.type.toUpperCase()} • {Math.floor(item.duration / 60)} min</p>
            </div>
            <button className="px-4 py-2 bg-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-700">
              {item.type === 'pdf' ? 'View PDF' : 'Play'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}