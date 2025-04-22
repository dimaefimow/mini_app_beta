import { useEffect, useState } from 'react';

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // API ключ YouTube
    const apiKey = 'YOUR_API_KEY';  // Замени на свой API ключ
    const fetchVideos = async () => {
      const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=RU&maxResults=10&key=${apiKey}`);
      const data = await res.json();
      setVideos(data.items);
    };

    fetchVideos();
  }, []);

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>TelegramTube</h1>
      <p>Загружаем тренды с YouTube...</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {videos.map((video) => (
          <div key={video.id} style={{ margin: 10, width: '300px' }}>
            <h3>{video.snippet.title}</h3>
            <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} style={{ width: '100%' }} />
            <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
              Смотреть
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
