import React from 'react';
import SkeletonCard from './SkeletonCard';

const HomePageSkeleton = () => {
  return (
    <div className="text-center py-10 sm:py-12 md:py-16">
        {/* Bu ana sarmalayıcı, gerçek içerikle aynı hizada olmasını sağlar */}
        <div className="dark:bg-zinc-900 bg-gray-50 p-4 sm:p-6 rounded-3xl border dark:border-zinc-700/50 border-gray-300 shadow-2xl inline-block max-w-full text-left">
            {/* Title */}
            <SkeletonCard className="h-8 w-48 mb-4 mx-auto" />
            {/* Race Name */}
            <SkeletonCard className="h-7 w-64 mb-6 mx-auto" />
            
            {/* Countdown boxes */}
            <div className="flex justify-center items-center py-4 gap-1 sm:gap-2">
                <SkeletonCard className="h-24 w-20 rounded-xl" />
                <SkeletonCard className="h-24 w-20 rounded-xl" />
                <SkeletonCard className="h-24 w-20 rounded-xl" />
                <SkeletonCard className="h-24 w-20 rounded-xl" />
            </div>

            {/* Details section */}
            <div className="mt-6 sm:mt-8 pt-4 border-t dark:border-zinc-800 border-gray-300">
                <SkeletonCard className="h-7 w-40 mb-4" />
                <div className="grid grid-cols-1 gap-3 sm:gap-4 text-left">
                <SkeletonCard className="h-16 w-full rounded-lg" />
                <SkeletonCard className="h-16 w-full rounded-lg" />
                <SkeletonCard className="h-16 w-full rounded-lg" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomePageSkeleton;