import React from 'react';
import useRssFeed from '../hooks/useRssFeed';
import AnimatedSection from '../components/AnimatedSection';
import { Rss } from 'lucide-react';
import { Tweet } from 'react-tweet';

const NewsPage = () => {
  const feedUrl = 'https://rss.app/feeds/S1n0npiU5ff4TdhL.xml';
  const { feed, loading, error } = useRssFeed(feedUrl);

  const getTweetId = (url) => {
    if (!url) return null;
    try {
      const urlObject = new URL(url);
      const pathParts = urlObject.pathname.split('/');
      // The tweet ID is usually the last part of the path
      return pathParts[pathParts.length - 1];
    } catch (e) {
      console.error("Invalid URL for tweet:", url, e);
      return null;
    }
  };

  return (
    <AnimatedSection>
      <div className="flex items-center justify-center mb-6 sm:mb-8">
        <Rss size={32} className="text-red-500 mr-3"/>
        <h1 className="text-3xl sm:text-4xl font-bold text-center dark:text-gray-100 text-gray-900">
          Haber Akışı
        </h1>
      </div>
      
      {loading && (
        <div className="text-center dark:text-gray-400 text-gray-600">
          <p>Tweetler yükleniyor...</p>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 bg-red-100 dark:bg-red-900/20 p-4 rounded-lg">
          <p>Haber akışı yüklenirken bir hata oluştu.</p>
          <p className="text-sm mt-2">Lütfen daha sonra tekrar deneyin.</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {feed.items
            .filter(item => item.title && !item.title.startsWith('@'))
            .map((item) => {
              const tweetId = getTweetId(item.link);
              if (!tweetId) return null;
              
              return (
                <div key={tweetId} className="tweet-container">
                  <Tweet id={tweetId} />
                </div>
              );
            })}
        </div>
      )}
    </AnimatedSection>
  );
};

export default NewsPage;
