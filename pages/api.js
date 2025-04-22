export default async function handler(req, res) {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Нет поискового запроса' });
  }

  try {
    const apiUrl = https://vid.puffyan.us/api/v1/search?q=${encodeURIComponent(query)}&type=video;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Ошибка получения данных с Invidious');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при поиске видео' });
  }
}
