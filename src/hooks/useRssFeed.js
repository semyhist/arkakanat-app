import { useState, useEffect } from 'react';

const useRssFeed = () => {
  const [feed, setFeed] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      setLoading(true);
      setError(null);
      const endpoint = '/.netlify/functions/get-rss-feed';

      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        setFeed(data);
      } catch (err) {
        console.error("Error fetching RSS feed from Netlify function:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []); // Empty dependency array as endpoint is static

  return { feed, loading, error };
};

export default useRssFeed;
