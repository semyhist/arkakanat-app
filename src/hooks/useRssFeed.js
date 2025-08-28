import { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const useRssFeed = (feedUrl) => {
  const [feed, setFeed] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      // Using a more reliable CORS proxy: corsproxy.io
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(feedUrl)}`;
      const parser = new Parser();

      try {
        setLoading(true);
        
        const response = await fetch(proxyUrl);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        const text = await response.text();

        const feedData = await parser.parseString(text);
        
        setFeed(feedData);
      } catch (err) {
        console.error("Error fetching or parsing RSS feed:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [feedUrl]);

  return { feed, loading, error };
};

export default useRssFeed;
