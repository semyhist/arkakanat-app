import AnimatedSection from '../components/AnimatedSection';
import { team } from '../data/team';

const TeamPage = () => (
  <div className="py-8 sm:py-10 md:py-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-800 text-center mb-8 sm:mb-10 md:mb-12">
      Ekibimiz
    </h1>
    <div className="flex flex-col items-center">
      {/* Yönetim Segment */}
      <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-800 mb-6 sm:mb-8 mt-2 sm:mt-4 border-b-2 border-red-500 pb-2">Yönetim</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 w-full">
        {team.management.map((member, index) => (
          <AnimatedSection key={`management-${index}`} delay={index * 150}>
            <div className="dark:bg-zinc-900 bg-white rounded-2xl p-6 text-center border dark:border-zinc-700/50 border-gray-300 h-full flex flex-col items-center">
              <span className="text-5xl mb-4">{member.emoji}</span>
              <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-100 text-gray-800 mb-2">{member.name}</h3>
              <p className="dark:text-gray-300 text-gray-700 text-sm flex-1">{member.bio}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      {/* İçerik Üretim */}
      <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-800 mb-6 sm:mb-8 mt-2 sm:mt-4 border-b-2 border-red-500 pb-2">İçerik Üretim</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 w-full">
        {team.admin.map((member, index) => (
          <AnimatedSection key={`admin-${index}`} delay={index * 150}>
            <div className="dark:bg-zinc-900 bg-white rounded-2xl p-6 text-center border dark:border-zinc-700/50 border-gray-300 h-full flex flex-col items-center">
              <span className="text-5xl mb-4">{member.emoji}</span>
              <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-100 text-gray-800 mb-2">{member.name}</h3>
              <p className="dark:text-gray-300 text-gray-700 text-sm flex-1">{member.bio}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Haber (X) */}
      <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-800 mb-6 sm:mb-8 mt-2 sm:mt-4 border-b-2 border-red-500 pb-2">Haber (X)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
        {team.Twitter.map((member, index) => (
          <AnimatedSection key={`Twitter-${index}`} delay={index * 150}>
            <div className="dark:bg-zinc-900 bg-white rounded-2xl p-6 text-center border dark:border-zinc-700/50 border-gray-300 h-full flex flex-col items-center">
              <span className="text-5xl mb-4">{member.emoji}</span>
              <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-100 text-gray-800 mb-2">{member.name}</h3>
              <p className="dark:text-gray-300 text-gray-700 text-sm flex-1">{member.bio}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default TeamPage;