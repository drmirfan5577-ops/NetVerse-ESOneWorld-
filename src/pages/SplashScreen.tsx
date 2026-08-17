import { useEffect } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white tracking-widest mb-4">NETVERSE</h1>
      <p className="text-xl text-emerald-400 italic">"A Global Family Platform Vision"</p>
      <div className="mt-8 w-32 h-1 bg-red-600 rounded-full animate-pulse"></div>
    </div>
  );
}