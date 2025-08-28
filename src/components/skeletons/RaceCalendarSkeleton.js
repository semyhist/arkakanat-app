import React from 'react';
import SkeletonCard from './SkeletonCard';

const RaceCalendarSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="dark:bg-zinc-900 bg-white rounded-2xl p-5 sm:p-6 border dark:border-zinc-700/50 border-gray-300 shadow-lg h-full">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <SkeletonCard className="h-5 w-20" />
          </div>
          <SkeletonCard className="h-7 w-3/4 mb-2" />
          <SkeletonCard className="h-5 w-1/2 mb-2" />
          <SkeletonCard className="h-5 w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default RaceCalendarSkeleton;