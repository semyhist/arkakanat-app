import { useState } from 'react';
import { MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CircuitModal from '../components/CircuitModal';

const CircuitGuidePage = ({ circuits }) => {
  const [selectedCircuit, setSelectedCircuit] = useState(null);

  const openModal = (circuit) => {
    setSelectedCircuit(circuit);
  };

  const closeModal = () => {
    setSelectedCircuit(null);
  };

  return (
    <div className="py-8 sm:py-10 md:py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-800 text-center mb-8 sm:mb-10 md:mb-12">
        Pist Rehberi
      </h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {circuits.map((circuit, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div 
              className="relative dark:bg-zinc-900 bg-white rounded-2xl overflow-hidden shadow-lg border dark:border-zinc-700/50 border-gray-300 h-full flex flex-col cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 focus-within:-translate-y-2"
              onClick={() => openModal(circuit)}
              tabIndex="0"
            >
              <img
                src={circuit.image}
                alt={circuit.name}
                className="w-full h-40 sm:h-48 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-5 sm:p-6 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold dark:text-gray-100 text-gray-800 mb-2">{circuit.name} {circuit.flag}</h3>
                <p className="dark:text-gray-300 text-gray-700 flex items-center mb-2">
                  <MapPin size={16} className="mr-2 text-red-500 shrink-0" />
                  <span className="truncate">{circuit.location}</span>
                </p>
                <div className="text-sm dark:text-gray-300 text-gray-700 space-y-1 mt-4 border-t dark:border-zinc-700 border-gray-200 pt-4">
                  <p><strong>Pist Uzunluğu:</strong> {circuit.length}</p>
                  <p><strong>Tur Sayısı:</strong> {circuit.laps}</p>
                  <p><strong>En Hızlı Tur:</strong> {circuit.fastestLap}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <CircuitModal circuit={selectedCircuit} onClose={closeModal} />
    </div>
  );
};

export default CircuitGuidePage;