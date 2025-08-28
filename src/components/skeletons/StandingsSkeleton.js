import React from 'react';
import SkeletonCard from './SkeletonCard';

const StandingsSkeleton = () => {
  return (
    <div className="space-y-3 sm:space-y-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="dark:bg-zinc-900 bg-white rounded-xl p-4 sm:p-5 flex items-center border dark:border-zinc-700/50 border-gray-300">
          <SkeletonCard className="h-10 w-10 rounded-full" />
          <div className="flex-1 ml-3 sm:ml-4 min-w-0">
            <SkeletonCard className="h-5 w-3/5 mb-2" />
            <SkeletonCard className="h-4 w-2/5" />
          </div>
          <SkeletonCard className="h-6 w-16" />
        </div>
      ))}
    </div>
  );
};

export default StandingsSkeleton;