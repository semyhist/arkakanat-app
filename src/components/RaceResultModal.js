import { X, Trophy } from 'lucide-react';
import { constructorColors } from '../data/constructorColors';

const RaceResultModal = ({ race, results, loading, onClose }) => {
  if (!race) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getPodiumIcon = (position) => {
    switch (position) {
      case "1":
        return <Trophy size={24} className="text-yellow-400" />;
      case "2":
        return <Trophy size={24} className="text-gray-400" />;
      case "3":
        return <Trophy size={24} className="text-yellow-600" />;
      default:
        return <div className="w-6 text-center text-lg font-bold text-red-400">{position}</div>;
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative dark:bg-zinc-900 bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-zoom-in"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 p-2 rounded-full dark:bg-zinc-800 bg-gray-200 hover:dark:bg-zinc-700 hover:bg-gray-300 transition-colors z-10"
          aria-label="Kapat"
        >
          <X size={20} />
        </button>
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-gray-100 text-gray-800 mb-2">{race.raceName} Sonuçları</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">{race.Circuit.circuitName}, {race.date}</p>

          {loading ? (
            <div className="text-center py-10">Yükleniyor...</div>
          ) : results && results.length > 0 ? (
            <div className="space-y-3">
              {results.map((result) => {
                const teamName = result.Constructor.name;
                const colorClass = constructorColors[teamName] || 'border-gray-500';

                return (
                  <div key={result.position} className={`p-4 rounded-xl flex items-center border-l-4 ${colorClass} dark:bg-zinc-800/50 bg-gray-100`}>
                    <div className="w-12 flex-shrink-0 flex justify-center items-center">
                      {getPodiumIcon(result.position)}
                    </div>
                    <div className="flex-1 ml-4 min-w-0">
                      <p className="font-semibold dark:text-white text-gray-800 truncate">{result.Driver.givenName} {result.Driver.familyName}</p>
                      <p className="text-sm dark:text-gray-300 text-gray-700 truncate">{teamName}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold dark:text-gray-200 text-gray-800">{result.points} PTS</p>
                      <p className="text-xs dark:text-gray-400 text-gray-600">{result.Time ? result.Time.time : result.status}</p>
                      {result.FastestLap && result.FastestLap.rank === "1" && (
                        <span className="text-xs text-purple-500 flex items-center justify-end mt-1">
                          <Trophy size={12} className="mr-1" /> En Hızlı Tur
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-10">Bu yarış için sonuç verisi bulunamadı.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RaceResultModal;