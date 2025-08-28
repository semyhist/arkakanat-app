import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { constructorColors } from '../data/constructorColors';
import StandingsSkeleton from '../components/skeletons/StandingsSkeleton';
import YearSelector from '../components/YearSelector';

const StandingsPage = ({ f1Data, loading, error, year, setYear }) => {
  const [activeTab, setActiveTab] = useState('drivers');

  if (loading) return <StandingsSkeleton />;
  if (error) return <div className="text-center text-red-500 py-10"><AlertCircle size={48} className="mx-auto mb-4" />Sıralama verileri yüklenemedi.</div>;

  const renderDrivers = () => {
    if (!f1Data.driverStandings || f1Data.driverStandings.length === 0) {
      return <div className="text-center dark:text-gray-300 text-gray-700 py-10">{year} sezonu için pilotlar sıralaması verisi bulunamadı.</div>;
    }
    return (
      <div className="space-y-3 sm:space-y-4">
        {f1Data.driverStandings.map((driver, index) => {
          const teamName = driver.Constructors?.[0]?.name;
          const colorClass = constructorColors[teamName] || 'bg-gray-500';
          return (
            <div key={index} className="dark:bg-zinc-900 bg-white rounded-xl p-3 sm:p-4 flex items-center border dark:border-zinc-700/50 border-gray-300 relative">
              <div className={`w-2 h-full absolute left-0 top-0 bottom-0 rounded-l-xl ${colorClass}`}></div>
              <div className="flex-none w-10 sm:w-12 text-center text-base sm:text-lg font-bold text-red-400">{driver.position}</div>
              <div className="flex-1 ml-3 sm:ml-4 min-w-0">
                <p className="font-semibold text-sm sm:text-base dark:text-white text-gray-800 truncate">{driver.Driver.givenName} {driver.Driver.familyName}</p>
                <p className="text-xs sm:text-sm dark:text-gray-300 text-gray-700 truncate">{teamName}</p>
              </div>
              <div className="text-right font-bold dark:text-gray-200 text-gray-800 ml-3 sm:ml-4 text-sm sm:text-base">
                {driver.points} <span className="text-xs sm:text-sm dark:text-gray-300 text-gray-700">PTS</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderConstructors = () => {
    if (!f1Data.constructorStandings || f1Data.constructorStandings.length === 0) {
      return <div className="text-center dark:text-gray-300 text-gray-700 py-10">{year} sezonu için takımlar sıralaması verisi bulunamadı.</div>;
    }
    return (
      <div className="space-y-3 sm:space-y-4">
        {f1Data.constructorStandings.map((constructor, index) => {
          const constructorName = constructor.Constructor?.name;
          const colorClass = constructorColors[constructorName] || 'bg-gray-500';
          return (
            <div key={index} className="dark:bg-zinc-900 bg-white rounded-xl p-3 sm:p-4 flex items-center border dark:border-zinc-700/50 border-gray-300 relative">
              <div className={`w-2 h-full absolute left-0 top-0 bottom-0 rounded-l-xl ${colorClass}`}></div>
              <div className="flex-none w-10 sm:w-12 text-center text-base sm:text-lg font-bold text-red-400">{constructor.position}</div>
              <div className="flex-1 ml-3 sm:ml-4 min-w-0">
                <p className="font-semibold text-sm sm:text-base dark:text-white text-gray-800 truncate">{constructorName}</p>
              </div>
              <div className="text-right font-bold dark:text-gray-200 text-gray-800 ml-3 sm:ml-4 text-sm sm:text-base">
                {constructor.points} <span className="text-xs sm:text-sm dark:text-gray-300 text-gray-700">PTS</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="py-8 sm:py-10 md:py-12">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-800">
          F1 Sezon Sıralamaları
        </h1>
        <div className="mt-4 flex justify-center">
          <YearSelector year={year} setYear={setYear} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <button
          onClick={() => setActiveTab('drivers')}
          className={`px-5 sm:px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'drivers' ? 'bg-red-600 text-white' : 'dark:bg-zinc-900 bg-gray-200 dark:text-gray-300 text-gray-700 hover:text-red-400'}`}
        >
          Pilotlar
        </button>
        <button
          onClick={() => setActiveTab('constructors')}
          className={`px-5 sm:px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'constructors' ? 'bg-red-600 text-white' : 'dark:bg-zinc-900 bg-gray-200 dark:text-gray-300 text-gray-700 hover:text-red-400'}`}
        >
          Takımlar
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-2 sm:px-0">
        {activeTab === 'drivers' ? renderDrivers() : renderConstructors()}
      </div>
    </div>
  );
};

export default StandingsPage;