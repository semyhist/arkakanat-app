import { useState } from 'react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { AlertCircle, MapPin, Calendar, ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import RaceCalendarSkeleton from '../components/skeletons/RaceCalendarSkeleton';
import YearSelector from '../components/YearSelector';
import RaceResultModal from '../components/RaceResultModal';
import Countdown from '../components/Countdown';
import { getSessionNameTR, getSessionIcon, convertToIstanbulTime } from '../components/common';

const RaceCalendarPage = ({ f1Data, loading, error, year, setYear, fetchRaceResults }) => {
  const [selectedRace, setSelectedRace] = useState(null);
  const [results, setResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [expandedRace, setExpandedRace] = useState(null);

  if (loading) return <RaceCalendarSkeleton />;
  if (error) return <div className="text-center text-red-500 py-10"><AlertCircle size={48} className="mx-auto mb-4" />Takvim verileri yüklenemedi.</div>;

  const handleViewResultsClick = async (race) => {
    setSelectedRace(race);
    setIsModalOpen(true);
    setResultsLoading(true);
    const raceResults = await fetchRaceResults(year, race.round);
    setResults(raceResults);
    setResultsLoading(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRace(null);
    setResults([]);
  };

  const toggleExpandRace = (round) => {
    setExpandedRace(expandedRace === round ? null : round);
  };

  const renderSessionDetails = (race) => {
    const sessions = ['FirstPractice', 'SecondPractice', 'ThirdPractice', 'Sprint', 'Qualifying', 'Race'];
    const raceDate = new Date(`${race.date}T${race.time || '00:00:00Z'}`);
    const isUpcoming = raceDate > new Date();

    return (
      <div className="mt-4 pt-4 border-t dark:border-zinc-700 border-gray-200">
        <h4 className="font-bold text-lg mb-3 dark:text-gray-200 text-gray-800">Hafta Sonu Programı</h4>
        <div className="space-y-3">
          {sessions.map(sessionKey => {
            const session = race[sessionKey];
            if (!session) return null;
            return (
              <div key={sessionKey} className="flex items-center justify-between p-2 rounded-lg dark:bg-zinc-800 bg-gray-100">
                <div className="flex items-center">
                  {getSessionIcon(sessionKey)}
                  <span className="ml-3 font-semibold text-sm dark:text-gray-300 text-gray-700">{getSessionNameTR(sessionKey)}</span>
                </div>
                <span className="text-sm dark:text-gray-400 text-gray-600">{convertToIstanbulTime(session.date, session.time)}</span>
              </div>
            )
          })}
        </div>
        <div className="mt-4">
          {isUpcoming ? (
            <Countdown targetDate={raceDate.toISOString()} />
          ) : (
            <button 
              onClick={() => handleViewResultsClick(race)}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              <Trophy size={16} className="mr-2" />
              Yarış Sonuçlarını Gör
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="py-8 sm:py-10 md:py-12">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-800">
            {year} F1 Yarış Takvimi
          </h1>
          <div className="mt-4 flex justify-center">
            <YearSelector year={year} setYear={setYear} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {f1Data?.races?.map((race, index) => {
            const isExpanded = expandedRace === race.round;
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div 
                  className="dark:bg-zinc-900 bg-white rounded-2xl p-5 sm:p-6 border dark:border-zinc-700/50 border-gray-300 shadow-lg h-full flex flex-col justify-between transition-all duration-300 cursor-pointer"
                  onClick={() => toggleExpandRace(race.round)}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-red-400">{race.round}. Yarış</span>
                      <div className="flex items-center gap-2">
                        {race.Sprint && <span className="dark:bg-yellow-600 bg-yellow-400 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full">SPRINT</span>}
                        {new Date(`${race.date}T${race.time || '00:00:00Z'}`) < new Date() && <span className="dark:bg-gray-600 bg-gray-400 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full">Tamamlandı</span>}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-100 text-gray-800 mb-1.5 sm:mb-2">{race.raceName}</h3>
                    <p className="dark:text-gray-300 text-gray-700 flex items-center">
                      <MapPin size={16} className="mr-2 text-red-500 shrink-0" />
                      <span className="truncate">{race.Circuit.circuitName}, {race.Circuit.Location.country}</span>
                    </p>
                    <p className="dark:text-gray-300 text-gray-700 flex items-center mt-2">
                      <Calendar size={16} className="mr-2 text-red-500 shrink-0" />
                      {format(new Date(race.date), 'dd MMMM yyyy', { locale: tr })}
                    </p>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-red-500 hover:text-red-400 transition-colors w-full flex items-center justify-center">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  {isExpanded && renderSessionDetails(race)}
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
      {isModalOpen && (
        <RaceResultModal 
          race={selectedRace} 
          results={results} 
          loading={resultsLoading} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default RaceCalendarPage;