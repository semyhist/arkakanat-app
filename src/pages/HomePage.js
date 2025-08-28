import { useState } from 'react';
import { AlertCircle, CircleDot, History, Bell } from 'lucide-react';
import HomePageSkeleton from '../components/skeletons/HomePageSkeleton';
import AnimatedSection from '../components/AnimatedSection';
import Countdown from '../components/Countdown';
import { convertToIstanbulTime, getSessionIcon, getSessionNameTR } from '../components/common';
import { f1HistoryData } from '../data/f1History';
import { useNotifications } from '../hooks/useNotifications';

const HomePage = ({ f1Data, loading, error }) => {
  const { permission, requestPermission, scheduleNotification } = useNotifications();
  const [notificationScheduled, setNotificationScheduled] = useState(false);

  if (loading) return <HomePageSkeleton />;
  if (error) return <div className="text-center text-red-500 py-10"><AlertCircle size={48} className="mx-auto mb-4" />Veriler yüklenemedi. Lütfen daha sonra tekrar deneyin.</div>;

  const nextRace = f1Data?.races?.find(race => {
    const raceDate = new Date(`${race.date}T${race.time}`);
    return raceDate > new Date();
  });

  const handleNotificationClick = async () => {
    if (!nextRace) return;

    let currentPermission = permission;
    if (currentPermission === 'default') {
      currentPermission = await requestPermission();
    }

    if (currentPermission === 'granted') {
      scheduleNotification(nextRace.raceName, `${nextRace.date}T${nextRace.time}`);
      setNotificationScheduled(true);
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .responsive-table thead {
            display: none;
          }
          .responsive-table tr {
            display: block;
            margin-bottom: 1rem;
            border-radius: 0.75rem;
            border: 1px solid #e5e7eb; /* gray-200 */
          }
          .dark .responsive-table tr {
            border-color: #404040; /* zinc-700 */
          }
          .responsive-table td {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 1rem;
            text-align: right;
            border-bottom: 1px solid #f3f4f6; /* gray-100 */
          }
          .dark .responsive-table td {
            border-color: #3f3f46; /* zinc-800 */
          }
          .responsive-table td::before {
            content: attr(data-label);
            font-weight: 600;
            text-align: left;
            margin-right: 1rem;
          }
          .responsive-table td:last-child {
            border-bottom: 0;
          }
        }
      `}</style>
      <AnimatedSection>
        <section className="text-center py-10 sm:py-12 md:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold dark:text-white text-gray-800 mb-3 sm:mb-4 animate-fade-in px-2">
            Formula 1'in Arka Kanat'ı
          </h1>
          <p className="text-base sm:text-lg md:text-xl dark:text-gray-300 text-gray-700 mb-6 sm:mb-8 animate-fade-in px-4">
            Bu sayfa bir Arka Kanat ürünüdür
          </p>
          {nextRace ? (
            <div className="dark:bg-zinc-900 bg-gray-50 p-4 sm:p-6 rounded-3xl border dark:border-zinc-700/50 border-gray-300 shadow-2xl inline-block max-w-full animate-zoom-in text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-red-400 flex items-center justify-start sm:justify-center">
                <CircleDot size={22} className="mr-2 sm:mr-3 text-red-500 animate-pulse" />
                Sıradaki Yarış
              </h2>
              <p className="dark:text-gray-200 text-gray-800 mb-4 text-lg sm:text-xl md:text-2xl font-semibold break-words">{nextRace.raceName}</p>

              <Countdown targetDate={`${nextRace.date}T${nextRace.time || '00:00:00Z'}`} />

              {/* Bildirim Butonu */}
              <div className="mt-4 text-center">
                <button 
                  onClick={handleNotificationClick}
                  disabled={permission === 'denied' || notificationScheduled}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  <Bell size={16} className="mr-2" />
                  {permission === 'denied' 
                    ? 'Bildirimler Engellendi' 
                    : notificationScheduled 
                      ? 'Bildirim Kuruldu' 
                      : 'Yarıştan 30dk Önce Bildir'}
                </button>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 border-t dark:border-zinc-800 border-gray-300">
                <h3 className="text-lg sm:text-xl font-bold dark:text-gray-200 text-gray-800 mb-3">Yarış Detayları</h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 text-left">
                  {Object.keys(nextRace.hasOwnProperty('Sessions') ? nextRace.Sessions : nextRace).filter(key => key.includes('Practice') || key.includes('Qualifying') || key.includes('Sprint') || key.includes('Race')).map((key, index) => {
                    const session = nextRace.hasOwnProperty('Sessions') ? nextRace.Sessions[key] : nextRace[key];
                    if (!session) return null;
                    return (
                      <div key={index} className="dark:bg-zinc-900 bg-gray-200 rounded-lg p-3 sm:p-4 transition-colors duration-200 hover:dark:bg-zinc-700/70 hover:bg-gray-300 flex items-center space-x-3">
                        {getSessionIcon(key)}
                        <div className="min-w-0">
                          <p className="font-semibold dark:text-gray-200 text-gray-800 truncate">{getSessionNameTR(key)}</p>
                          <p className="text-sm dark:text-gray-300 text-gray-700 mt-1">{convertToIstanbulTime(session.date, session.time)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center dark:text-gray-300 text-gray-700 py-10">Sezon için planlanmış başka yarış bulunmuyor.</div>
          )}
        </section>
      </AnimatedSection>

      <div className="py-8 sm:py-10 md:py-12"></div>

      <AnimatedSection delay={400}>
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-gray-100 text-gray-800 mb-4 sm:mb-6 flex items-center px-2">
            <History size={22} className="mr-2" /> F1 Tarihi
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="dark:bg-zinc-900 bg-white p-5 sm:p-6 rounded-2xl border dark:border-zinc-700/50 border-gray-300 shadow-lg transform transition-transform duration-300 hover:scale-[1.03] h-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold dark:text-gray-200 text-gray-800 mb-3 sm:mb-4">En Çok Pilotlar Şampiyonu</h3>
              <ul className="space-y-2 sm:space-y-3">
                {f1HistoryData.mostDriverTitles.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="font-semibold dark:text-gray-300 text-gray-700">{item.driver}</span>
                    <span className="text-lg font-bold text-red-500">{item.titles}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dark:bg-zinc-900 bg-white p-5 sm:p-6 rounded-2xl border dark:border-zinc-700/50 border-gray-300 shadow-lg transform transition-transform duration-300 hover:scale-[1.03] h-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold dark:text-gray-200 text-gray-800 mb-3 sm:mb-4">En Çok Takımlar Şampiyonu</h3>
              <ul className="space-y-2 sm:space-y-3">
                {f1HistoryData.mostConstructorTitles.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="font-semibold dark:text-gray-300 text-gray-700">{item.constructor}</span>
                    <span className="text-lg font-bold text-red-500">{item.titles}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 dark:bg-zinc-900 bg-white p-4 sm:p-6 rounded-2xl border dark:border-zinc-700/50 border-gray-300 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold dark:text-gray-200 text-gray-800 mb-3 sm:mb-4">Bütün Sezon Şampiyonları</h3>
            <div className="max-h-96 overflow-y-auto">
              <table className="min-w-full text-sm responsive-table">
                <thead className="sticky top-0 dark:bg-zinc-900 bg-white">
                  <tr>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-medium dark:text-gray-300 text-gray-500 uppercase tracking-wider">Sezon</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-medium dark:text-gray-300 text-gray-500 uppercase tracking-wider">Pilot Şampiyonu</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-left text-[11px] sm:text-xs font-medium dark:text-gray-300 text-gray-500 uppercase tracking-wider">Takımlar Şampiyonu</th>
                  </tr>
                </thead>
                <tbody className="dark:divide-zinc-700 divide-gray-300">
                  {f1HistoryData.allChampions.map((champion, index) => (
                    <tr key={index} className="hover:dark:bg-zinc-700/50 hover:bg-gray-200 transition-colors">
                      <td data-label="Sezon" className="px-4 sm:px-6 py-3 whitespace-nowrap dark:text-gray-200 text-gray-800">{champion.year}</td>
                      <td data-label="Pilot Şampiyonu" className="px-4 sm:px-6 py-3 whitespace-nowrap dark:text-gray-300 text-gray-700">{champion.driver}</td>
                      <td data-label="Takımlar Şampiyonu" className="px-4 sm:px-6 py-3 whitespace-nowrap dark:text-gray-300 text-gray-700">{champion.constructor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default HomePage;