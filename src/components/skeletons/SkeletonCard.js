import React from 'react';

const SkeletonCard = ({ className }) => {
  return (
    <div className={`bg-gray-200 dark:bg-zinc-800 rounded-md animate-pulse ${className}`}></div>
  );
};

export default SkeletonCard;