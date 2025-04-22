import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TelegramTube</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ padding: 20, textAlign: 'center' }}>
        <h1>TelegramTube</h1>
        <p>Загружаем тренды с YouTube...</p>
        <iframe
          width="100%"
          height="500"
          src="https://invidious.snopyta.org/feed/trending"
          style={{ border: 'none' }}
          title="Trending Videos"
        />
      </main>
    </>
  );
}
