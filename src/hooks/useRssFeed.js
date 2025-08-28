import { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const useRssFeed = (feedUrl) => {
  const [feed, setFeed] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      setLoading(true);
      setError(null);
      const parser = new Parser();

      const proxies = [
        (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        (url) => `https://cors.bridged.cc/${url}`,
        (url) => `https://cors-proxy.fringe.zone/${url}`
      ];

      let success = false;
      for (const getProxyUrl of proxies) {
        const proxyUrl = getProxyUrl(feedUrl);
        try {
          const response = await fetch(proxyUrl, { cache: 'no-store' });
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
          }
          const text = await response.text();
          const feedData = await parser.parseString(text);
          
          setFeed(feedData);
          success = true;
          console.log(`Proxy success: ${proxyUrl}`);
          break; // Exit loop on success
        } catch (err) {
          console.warn(`Proxy failed: ${proxyUrl}`, err);
          // Try next proxy
        }
      }

      if (!success) {
        console.error("All proxies failed.");
        setError(new Error("Haber akışı sunucularına ulaşılamadı."));
      }

      setLoading(false);
    };

    fetchFeed();
  }, [feedUrl]);

  return { feed, loading, error };
};

export default useRssFeed;
