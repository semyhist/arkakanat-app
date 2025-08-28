const Parser = require('rss-parser');

exports.handler = async function(event, context) {
  const feedUrl = 'https://rss.app/feeds/S1n0npiU5ff4TdhL.xml';
  const parser = new Parser();

  try {
    const feed = await parser.parseURL(feedUrl);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        // Cache for 10 minutes on the client and CDN
        'Cache-Control': 'public, max-age=600' 
      },
      body: JSON.stringify(feed)
    };
  } catch (error) {
    console.error('Error fetching or parsing RSS feed:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: 'Failed to fetch RSS feed.'
      })
    };
  }
};