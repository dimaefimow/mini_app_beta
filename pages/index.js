import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (query.trim() === '') return;

    setLoading(true);
    setError(null);

    try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error('Ошибка при загрузке видео');
    const data = await res.json();
    setVideos(data);
  } catch (err) {
    setError('Не удалось загрузить видео. Попробуйте позже.');
  } finally {
    setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>TelegramTube</h1>
      <input
        type="text"
        placeholder="Поиск видео"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', fontSize: '1rem', marginBottom: '20px' }}
      />
      <br />
      <button onClick={handleSearch} style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}>
        Найти
      </button>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {videos.map((video) => (
          <div key={video.videoId || video.video_id} style={{ margin: 10, width: '300px' }}>
            <h3>{video.title}</h3>
            <img src={video.videoThumbnails?.[0]?.url  video.thumbnail  video.thumbnail_url} alt={video.title} style={{ width: '100%' }} />
            <a href={`https://www.youtube.com/watch?v=${video.videoId || video.video_id}`} target="_blank" rel="noopener noreferrer">
              Смотреть
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
