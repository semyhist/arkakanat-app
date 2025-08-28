import { useState, useEffect } from 'react';
import { Sun, Moon, Instagram, X, Gauge, Menu, X as XIcon } from 'lucide-react';

import useF1Data from './hooks/useF1Data';
import { circuits } from './data/circuits';

import HomePage from './pages/HomePage';
import RaceCalendarPage from './pages/RaceCalendarPage';
import CircuitGuidePage from './pages/CircuitGuidePage';
import StandingsPage from './pages/StandingsPage';
import TeamPage from './pages/TeamPage';
import AddToHomeScreenPage from './pages/AddToHomeScreenPage';

// =================================================================================================
// Ana Uygulama Bileşeni (App.js)
// Sitenin genel yapısını ve sayfa yönlendirmesini yönetir.
// =================================================================================================
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme === 'dark' || (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch (e) {
      return true; // Yerel depolama mevcut değilse varsayılan olarak karanlık tema kullan
    }
  });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const { f1Data, loading, error, fetchRaceResults } = useF1Data(year);

  useEffect(() => {
    // Tema ayarını yerel depolamaya kaydet
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch (e) {
      console.error("Local storage is not available.", e);
    }
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage f1Data={f1Data} loading={loading} error={error} />;
      case 'race-calendar':
        return <RaceCalendarPage f1Data={f1Data} loading={loading} error={error} year={year} setYear={setYear} fetchRaceResults={fetchRaceResults} />;
      case 'circuit-guide':
        return <CircuitGuidePage circuits={circuits} />;
      case 'standings':
        return <StandingsPage f1Data={f1Data} loading={loading} error={error} year={year} setYear={setYear} />;
      case 'team':
        return <TeamPage />;
      case 'add-to-home-screen':
        return <AddToHomeScreenPage />;
      default:
        return <HomePage f1Data={f1Data} loading={loading} error={error} />;
    }
  };

  // paylaşılan navigasyon butonu stili
  const navBtn = (key, label) => (
    <button
      onClick={() => { setCurrentPage(key); setIsNavOpen(false); }}
      className={`w-full sm:w-auto text-left sm:text-center px-4 py-2 rounded-full font-medium transition-colors duration-300 ${currentPage === key ? 'bg-red-600 text-white' : 'dark:text-gray-300 text-gray-700 hover:text-red-400'}`}
    >
      {label}
    </button>
  );

  return (
    <div className={`font-sans ${isDarkMode ? 'dark bg-zinc-900 text-white' : 'light bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-500`}>
      <style>{`
        body { font-family: 'Inter', sans-serif; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zoom-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .z-20 { z-index: 20; }
      `}</style>

      {/* Üst Kısım (Header) */}
      <header className="fixed top-0 w-full z-40 dark:bg-zinc-900/80 bg-gray-50/80 backdrop-blur-sm shadow-lg border dark:border-zinc-700/50 border-gray-200">
        <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gauge size={26} className="text-red-500" />
              <span className="text-xl sm:text-2xl font-bold dark:text-gray-200 text-gray-800">Arka Kanat</span>
            </div>

            {/* Masaüstü navigasyon */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              {navBtn('home', 'Ana Sayfa')}
              {navBtn('race-calendar', 'Yarış Takvimi')}
              {navBtn('circuit-guide', 'Pist Rehberi')}
              {navBtn('standings', 'Sıralamalar')}
              {navBtn('team', 'Ekibimiz')}
              {navBtn('add-to-home-screen', 'Rehber')}
            </div>

            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 rounded-full dark:bg-zinc-900/50 bg-gray-200 hover:dark:bg-zinc-900 hover:bg-gray-300 transition-colors">
                {isDarkMode ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-gray-500" />}
              </button>
              {/* Mobil navigasyon açma/kapama butonu */}
              <button
                className="md:hidden p-2 rounded-lg dark:bg-zinc-900/50 bg-gray-200 hover:dark:bg-zinc-900 hover:bg-gray-300 transition-colors"
                onClick={() => setIsNavOpen(v => !v)}
                aria-label="Menüyü Aç/Kapat"
              >
                {isNavOpen ? <XIcon size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobil navigasyon paneli */}
          {isNavOpen && (
            <div className="md:hidden mt-3 grid gap-2">
              {navBtn('home', 'Ana Sayfa')}
              {navBtn('race-calendar', 'Yarış Takvimi')}
              {navBtn('circuit-guide', 'Pist Rehberi')}
              {navBtn('standings', 'Sıralamalar')}
              {navBtn('team', 'Ekibimiz')}
              {navBtn('add-to-home-screen', 'Rehber')}
            </div>
          )}
        </nav>
      </header>

      {/* Ana İçerik */}
      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-24 sm:pt-28">
        {renderPage()}
      </main>

      {/* Alt Kısım (Footer) */}
      <footer className="mt-8 sm:mt-10 md:mt-12 text-center dark:text-gray-500 text-gray-700 py-6 sm:py-8 border-t dark:border-zinc-700/50 border-gray-200">
        <div className="flex justify-center space-x-4 mb-3 sm:mb-4">
          <a href="https://www.instagram.com/arkakanat" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full dark:text-gray-300 text-gray-700 hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
            <Instagram size={22} />
          </a>
          <a href="https://x.com/arkakanat" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full dark:text-gray-300 text-gray-700 hover:text-black dark:hover:text-white transition-colors duration-300 transform hover:scale-110">
            <X size={22} />
          </a>
        </div>
        <p className="text-xs sm:text-sm">
          &copy; 2025 Arka Kanat. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
};

export default App;