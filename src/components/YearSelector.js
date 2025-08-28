import { Calendar } from 'lucide-react';

const YearSelector = ({ year, setYear, startYear = 1950 }) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= startYear; i--) {
    years.push(i);
  }

  return (
    <div className="flex items-center gap-2">
      <Calendar size={20} className="text-gray-500" />
      <select
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
        className="dark:bg-zinc-800 bg-gray-200 border dark:border-zinc-700 border-gray-300 rounded-md px-3 py-1.5 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;