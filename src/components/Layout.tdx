import { Outlet, Link } from 'react-router-dom';
import { Home, BookOpen, Newspaper, Shield } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700 p-4 hidden md:block">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-emerald-400">NETVERSE</h1>
          <p className="text-xs text-gray-500 mt-1">A Universal Digital App</p>
        </div>
        
        <nav className="space-y-2">
          <Link to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <Home size={20} /> Home
          </Link>
          <Link to="/islamic" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <BookOpen size={20} /> Islamic Series
          </Link>
          <Link to="/news" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <Newspaper size={20} /> News Aggregator
          </Link>
          <Link to="/admin" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition text-red-400">
            <Shield size={20} /> Admin Panel
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
        
        {/* Mandatory Footer */}
        <footer className="mt-20 pt-10 pb-6 border-t border-gray-800 text-center px-6">
          <h3 className="text-2xl font-bold text-white mb-1">NetVerse</h3>
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-8">A project of E.S OneWorld</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8 text-[11px]">
            <div className="p-3 rounded border border-gray-800 bg-gray-900/50 text-gray-400">⚠️ Warnings# | Secrecy policy# | Disclaimer#</div>
            <div className="p-3 rounded border border-gray-800 bg-gray-900/50 text-gray-400">© Copyright: SMART WORLD ORDER</div>
            <div className="p-3 rounded border border-gray-800 bg-gray-900/50 text-gray-400">Vision by Dr M Irfan Qadir Thaheem</div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-blue-400 font-medium text-xs mb-8">
            <span>📞 WhatsApp: 0300_4737757</span>
            <span>✉️ dr.mirfan5577@gmail.com</span>
            <a href="https://drmirfan5577-ops.github.io/SmartWorldOrder" className="hover:underline">🌐 SmartWorldOrder Web</a>
          </div>

          <p className="text-gray-600 italic text-xs max-w-lg mx-auto leading-relaxed opacity-80">
            "اس دنیا میں کچھ بھی ناممکن نہیں، بس منزل کے مطابق ضروریات پوری کرنی ہوتی ہیں"
          </p>
        </footer>
      </main>
    </div>
  );
}