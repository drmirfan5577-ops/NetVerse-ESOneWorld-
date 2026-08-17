import { useState } from 'react';
import { Shield, Link, Palette, Users, Server } from 'lucide-react';

export default function AdminPanel() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700">
          <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-center mb-6">Admin Command Center</h2>
          <input 
            type="password" 
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white mb-4 focus:border-red-500 outline-none"
          />
          <button 
            onClick={() => password === '1122' && setAuthenticated(true)}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Access Control Panel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Shield className="text-red-500" /> NetVerse Admin Command
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition cursor-pointer">
          <Link className="w-8 h-8 text-blue-500 mb-3" />
          <h3 className="text-xl font-bold mb-2">Connectivity Linking</h3>
          <p className="text-sm text-gray-400">Integrate external apps, URLs, and sub-domains.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition cursor-pointer">
          <Palette className="w-8 h-8 text-purple-500 mb-3" />
          <h3 className="text-xl font-bold mb-2">Customization Studio</h3>
          <p className="text-sm text-gray-400">Themes, wallpapers, transitions, and layout configs.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition cursor-pointer">
          <Users className="w-8 h-8 text-green-500 mb-3" />
          <h3 className="text-xl font-bold mb-2">Accounts Management</h3>
          <p className="text-sm text-gray-400">View emails, reply, manage community attachments.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition cursor-pointer">
          <Server className="w-8 h-8 text-orange-500 mb-3" />
          <h3 className="text-xl font-bold mb-2">Hosting & Status</h3>
          <p className="text-sm text-gray-400">App health, integrations, and professional boost.</p>
        </div>
      </div>
    </div>
  );
}